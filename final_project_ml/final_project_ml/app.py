# -*- coding: utf-8 -*-
"""Predicting_Bitcoin_Price_using_Deep_Learning.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/17i2kaBR0Vu3Y72U2wo-WfQNJDFRtXBzW
"""

import requests, pandas as pd, numpy as np, matplotlib.pyplot as plt

from sklearn.preprocessing import MinMaxScaler
# from tensorflow.keras.layers import Dense, Dropout, LSTM
# from tensorflow.keras.models import Sequential

#Streamlit work
from tensorflow.keras.models import load_model              #to load the trained model
import streamlit as st
st.title('Stock Trend Prediction')
user_input=st.text_input('Enter Stock Ticker', 'BTC/USD')
user_st=st.text_input('Enter Start Date (yyyy-mm-dd)', '2021-10-03')
user_et=st.text_input('Enter End Date (yyyy-mm-dd)', '2021-10-20')
#
api_key = '1688d4c2ff8442d9906cb0637a7d7fbc'
symbol = user_input
interval = '5min'
order = 'asc'
start_date = user_st+' 00:00:00'
end_date = user_et+' 00:00:00'

api_url = f'https://api.twelvedata.com/time_series?symbol={symbol}&start_date={start_date}&end_date={end_date}&interval={interval}&order={order}&apikey={api_key}'

data = requests.get(api_url).json()
data_final = pd.DataFrame(data['values'])
#Streamlit work Describing data
st.subheader('Data from '+start_date+ ' to ' + end_date)
st.write(data_final)
# 

df= data_final.drop(['datetime'],axis=1)
df.head()

ma50=df.close.rolling(50).mean()
ma200=df.close.rolling(200).mean()
#ma100

b_p = pd.to_numeric(df['close'], errors = 'coerce').values
dma50_p = pd.to_numeric(ma50, errors = 'coerce').values
dma200_p = pd.to_numeric(ma200, errors = 'coerce').values

#Streamlit work Visualisation
st.subheader('Closing price vs Time chart between '+start_date+' and '+end_date)
fig = plt.figure(figsize=(20,9))
plt.plot(b_p, label='Bitcoin Price')
plt.title('Bitcoin Price Chart')
plt.legend()
plt.show()
st.pyplot(fig)

st.subheader('Closing price vs Time chart with 50 & 200 DMA')
fig1 = plt.figure(figsize=(20,9))
plt.plot(b_p, label='Bitcoin Price')
plt.plot(dma50_p, label='50 DMA')
plt.plot(dma200_p, label='200 DMA')
plt.title('Bitcoin Price Chart with 50 & 200 days moving average')
plt.legend()
# plt.show() instead we use this
st.pyplot(fig1)

scaler = MinMaxScaler(feature_range=(0,1))
scaled_data = scaler.fit_transform(data_final['close'].values.reshape(-1,1))

time_intervals_to_train = 24
prediction_interval = 12

# x_train = []
# y_train = []

# for i in range(time_intervals_to_train, len(scaled_data) - prediction_interval):
#   x_train.append(scaled_data[i - time_intervals_to_train: i, 0])
#   y_train.append(scaled_data[i + prediction_interval, 0])

# x_train = np.array(x_train)
# y_train = np.array(y_train)

# x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))

# x_train.shape

# model = Sequential() 

# model.add(LSTM(128, return_sequences= True, input_shape = (x_train.shape[1], 1), activation = 'relu'))
# model.add(Dropout(0.4))
# model.add(LSTM(64, return_sequences= True, activation = 'relu'))
# model.add(Dropout(0.3))
# model.add(LSTM(32, activation= 'relu'))
# model.add(Dropout(0.2))
# model.add(Dense(1, activation = 'sigmoid'))

# model.summary()

# model.compile(loss = 'mean_squared_error', optimizer= 'adam', metrics= ['accuracy'])

# model.fit(x_train, y_train, epochs=10, batch_size= 64)

#Loading Model
model = load_model('bitcoin_deep_learning.h5')
#
#User input test dates
user_tst=st.text_input('Enter Start Date (yyyy-mm-dd)', '2021-10-20')
user_tet=st.text_input('Enter End Date (yyyy-mm-dd)', '2021-10-23')
test_start = user_tst+' 00:00:00'
test_end = user_tet+' 00:00:00'

test_api_url = f'https://api.twelvedata.com/time_series?symbol={symbol}&start_date={test_start}&end_date={test_end}&interval={interval}&order={order}&apikey={api_key}'
test_data = requests.get(test_api_url).json()
test_data_final = pd.DataFrame(test_data['values'])
# test_data_final

bitcoin_prices = pd.to_numeric(test_data_final['close'], errors = 'coerce').values
# bitcoin_prices

test_inputs = test_data_final['close'].values
test_inputs = test_inputs.reshape(-1,1)
model_inputs = scaler.fit_transform(test_inputs)

x_test = []

for x in range(time_intervals_to_train, len(model_inputs)):
  x_test.append(model_inputs[x - time_intervals_to_train:x, 0])

x_test = np.array(x_test)
x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))

prediction_prices = model.predict(x_test)
prediction_prices = scaler.inverse_transform(prediction_prices)

#Final Graph
st.subheader('Original Vs Prediction between '+test_start+' and '+test_end)
fig2= plt.figure(figsize=(15,9))
plt.plot(bitcoin_prices, label = 'Bitcoin Prices')
plt.plot(prediction_prices, label = 'Predicted Prices')
plt.title('Predicting Bitcoin Price')
plt.xlabel('5min Time interval')
plt.ylabel('Price')
plt.legend()
st.pyplot(fig2)

last_data = model_inputs[len(model_inputs) - time_intervals_to_train : len(model_inputs), 0]
last_data = np.array(last_data)

# last_data.shape

last_data = np.reshape(last_data, (1, last_data.shape[0], 1))

prediction = model.predict(last_data)

prediction = scaler.inverse_transform(prediction)

# prediction
st.caption('Price of next one hour : ')
x=prediction[0]
st.write(x)