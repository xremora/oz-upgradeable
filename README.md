## Notes

- There is no constructor in implementation contracts because the shared storage is of proxy contract.

For transparent proxy:

```
proxy --> implementation
  ^
  |
  |
proxy admin
```

```
npx hardhat compile

# 3 transactions (deploy V1, ProxyAdmin and proxy)
env $(cat .env) npx hardhat run --network ropsten scripts/deploy_box_v1.js
# 2 transactions (deploy V2, ProxyAdmin.upgrade)
env $(cat .env) npx hardhat run --network ropsten scripts/upgrade_box_v2.js

IMP=0x44c8e7bB09978D2E807C982D79B52f5f3e8e0C41
env $(cat .env) npx hardhat verify --network ropsten $IMP
```