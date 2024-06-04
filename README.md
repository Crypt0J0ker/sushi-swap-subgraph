- В сети Polygon создан токен **Angel** по адресу **0xADafBfEf871304C44E6919350B750f968D045E7e**
Далее на SushiSwap создан пулл по адресу **0xb5915995366E0331B95107fc6E80Beec44bCd0bb**

- Пул можно найти по этой ссылке https://www.sushi.com/swap?chainId=137&token0=NATIVE&token1=0xADafBfEf871304C44E6919350B750f968D045E7e&swapAmount=1

- В нем сразу установлено значение MATIC на 1 MATIC, потому что в условиях задачи мы пропишем, что как минимум 1 MATIC должен быть обменян на токен.

- Graph настроен на отслеживание пула, и позволяет при запросе пользователя на обновление статуса задачи проверить был ли им сделан свап в нашем пуле на сумму более чем 1 MATIC.

Необходимо чтобы предварительно был установлен Docker Compose

### Для запуска проекта необходимо выполнить пункты 2, 3, 4, 6.

```bash
1. graph init --product hosted-service --from-contract 0xb5915995366e0331b95107fc6e80beec44bcd0bb --network matic --abi C:\Crypto\Work\Fronk\Tasks\web3_tasks\constants\SushiSwapABI.json Crypt0J0ker/sushi-swap-subgraph

2. yarn install 

3. yarn start

4. yarn auth

5. yarn build

6. yarn deploy --studio sushi-swap-subgraph
```

### Запрос 7 ищет все свапы определенного пользователя в нашем пуле MATIC/ANG, при условии, что количество MATIC больше 1.

7. 
```json
{
  swaps(where: { 
    amount0_gte: "1000000000000000000",
    recipient: "0x13bd78d4f0c615ee97fb5972352a16950e885466"
  }) {
    id
    sender
    recipient
    amount0
    amount1
  }
}
```


