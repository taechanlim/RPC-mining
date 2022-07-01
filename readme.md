# Geth

- RPC 통신

- metamask

- Nodejs web3로 접속

작업할 디렉토리 하나 생성
datadir로 사용할 예정
mkdir `node`

```sh
$ geth --datadir node account new
```

## genesis.json

설치된 go-ehtereum가서 make all하면 다 설치가 된다.
그 중에
puppeth : 설정파일 도와주는 아이
bootnode : 네트워크 서버
사용예정

## puppeth실행

```sh
$ puppeth
```

taechan
2
1
1
key address 3번
yes
7722
2
2
taechan\_
순으로 입력

```sh
geth --datadir node init "./taechan_/taechan.json"
geth --datadir node #실행
# geth.ipc
# geth attach ./node/geth.ipc
```

# rpc통신

```sh
geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "*" --http.api "admin,miner,txpool,net,web3,personal,eth" --syncmode full --networkid 7722 --port 30300 --allow-insecure-unlock
# --http.addr : 접속가능한 주소(0.0.0.0 은 모두접근가능)
# --http.port : 포트설정
# --http.corsdomain : * 이면 허용(true)
# --http.api : 허용할 api
geth attach http://127.0.0.1:9000 #서버킨상태에서 실행
```

mkdir explorer
npm init -y
npm install web3 jest

```sh
personal.newAccount('1234')
#0xaf250644f1faf6dc950a1720a6071d4ca4ee571c -> coinbase
#0xcc1afa9e45125338245cb6de5ab288312c3ff6ad
eth.getBalance(coinbase)
personal.sendTransaction(
    {
        from:eth.coinbase,
        to:'0xea805f2652c7f1b4d44a5fa8ea7fd80bd542d2e9',
        value:web3.toWei(4,"ether")
    },
    "9688"
)
```
