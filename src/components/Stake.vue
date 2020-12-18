<template>
<div>
  <div class="harvest__Stake">
    <h2 class="harvest__Stake-title">
      Earn
      <img class="harvest__Stake-title-img" src="../assets/farm.png" alt="">
      FARM with Harvest
    </h2>
    <div class="harvest__Stake-content">
      You haven't connected a wallet.
      <div @click="openMatmak">
      <button class="harvest__Stake-content-button">Connect Wallet</button>
      </div>
    </div>
    <h3 class="harvest__Stake-title-2">
      Stake your LP tokens for rewards
    </h3>
    <div class="harvest__Stake-tab open">
      <div class="harvest__Stake-tab-x">
        <div class="harvest__Stake-tab-xx">
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/farm.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>FARM</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>Auto-compounding</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>🎨</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>14,200 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>💻</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>5,000 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/d.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/weth.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Collapsible">
      <div class="body__tab-stablecoins-1" @click="openTab">
        <div class="menu__StaCoins">
          <div class="menu__StaCoins-1-n">
            <span>
              <i class="fas fa-angle-down iconClose"></i>
              <i class="fas fa-angle-up iconOpen"></i>
            </span>
            <b>FARM Liquidity</b>
          </div>
          <div class="menu__StaCoins-2">
            <div class="menu__StaCoins-2-img">
              <img src="../assets/farm-usdc.png" class="img_icon" alt="img">
              FARM/USDC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/farm-weth.png" class="img_icon" alt="img">
              FARM/ETH
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/farm-grain.png" class="img_icon" alt="img">
              FARM/GRAIN
            </div>
            <div class="menu__StaCoins-2-img">
              <div class="moon">🌕</div>
              Moonswap
            </div>
          </div>
          <div class="menu__StaCoins-3">
            <span>
              APY:
              <b>
                <div class="creaz">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </b>
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="closeTab">
      <div v-if="click" class="harvest__Stake-tab">
      <div class="harvest__Stake-tab-x">
        <div @click.prevent="click=!click" class="harvest__Stake-tab-xx">
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/farm.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>FARM</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>Auto-compounding</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>🎨</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>14,200 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>💻</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>5,000 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/d.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/weth.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div class="Collapsible">
      <div class="body__tab-stablecoins-1" @click="openStab">
        <div class="menu__StaCoins">
          <div class="menu__StaCoins-1-n">
            <span>
              <i class="fas fa-angle-down iconClose"></i>
              <i class="fas fa-angle-up iconOpen"></i>
            </span>
            <b>Stablecoins</b>
          </div>
          <div class="menu__StaCoins-2">
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-10.png" class="img_icon" alt="img">
              YCRV
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/three-pool.png" class="img_icon" alt="img">
              3CRV
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-8.png" class="img_icon" alt="img">
              CRV:HUSD
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-4.png" class="img_icon" alt="img">
              CRV:COMPOUND
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-3.png" class="img_icon" alt="img">
              CRV:BUSD
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-5.png" class="img_icon" alt="img">
              CRV:BUSD
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/usdc.png" class="img_icon" alt="img">
              USDC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/usdt.png" class="img_icon" alt="img">
              USDT
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-6.png" class="img_icon" alt="img">
              DAI
            </div>
          </div>
          <div class="menu__StaCoins-3">
            <span>
              APY:
              <b>
                <div class="creaz">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </b>
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="closeStab">
      <div v-if="click1" class="harvest__Stake-tab">
      <div class="harvest__Stake-tab-x">
        <div @click.prevent="click1=!click1" class="harvest__Stake-tab-xx">
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/farm.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>FARM</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>Auto-compounding</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>🎨</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>14,200 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>💻</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>5,000 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/d.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/weth.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div class="Collapsible">
      <div class="body__tab-stablecoins-1" @click="openBTC">
        <div class="menu__StaCoins">
          <div class="menu__StaCoins-1-n">
            <span>
              <i class="fas fa-angle-down iconClose"></i>
              <i class="fas fa-angle-up iconOpen"></i>
            </span>
            <b>FARM Liquidity</b>
          </div>
          <div class="menu__StaCoins-2">
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-7.png" class="img_icon" alt="img">
              CRV:HBTC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-11.png" class="img_icon" alt="img">
              CRV:TBTC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-12.png" class="img_icon" alt="img">
              CRV:RENWBTC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-13.png" class="img_icon" alt="img">
              WBTC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/icon-14.png" class="img_icon" alt="img">
              RENBTC
            </div>
          </div>
          <div class="menu__StaCoins-3">
            <span>
              APY:
              <b>
                <div class="creaz">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </b>
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="closeBTC">
      <div v-if="click2" class="harvest__Stake-tab">
      <div class="harvest__Stake-tab-x">
        <div @click.prevent="click2=!click2" class="harvest__Stake-tab-xx">
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/farm.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>FARM</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>Auto-compounding</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>🎨</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>14,200 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>💻</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>5,000 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/d.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/weth.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div class="Collapsible">
      <div class="body__tab-stablecoins-1" @click="openShu">
        <div class="menu__StaCoins">
          <div class="menu__StaCoins-1-n">
            <span>
              <i class="fas fa-angle-down iconClose"></i>
              <i class="fas fa-angle-up iconOpen"></i>
            </span>
            <b>FARM Liquidity</b>
          </div>
          <div class="menu__StaCoins-2">
            <div class="menu__StaCoins-2-img">
              <img src="../assets/dai-1.png" class="img_icon" alt="img">
              ETH-DAI
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/dai-2.png" class="img_icon" alt="img">
              ETH-USDC
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/dai-3.png" class="img_icon" alt="img">
              ETH-USDT
            </div>
            <div class="menu__StaCoins-2-img">
              <img src="../assets/dai-4.png" class="img_icon" alt="img">
              ETH-WBTC
            </div>
          </div>
          <div class="menu__StaCoins-3">
            <span>
              APY:
              <b>
                <div class="creaz">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </b>
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="closeShu">
      <div v-if="click3" class="harvest__Stake-tab">
      <div class="harvest__Stake-tab-x">
        <div @click.prevent="click3=!click3" class="harvest__Stake-tab-xx">
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/farm.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>FARM</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>Auto-compounding</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>🎨</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>14,200 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <span>💻</span>
                Creativity Farm
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b>5,000 USD in prizes</b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/d.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
          <div class="harvest__Stake-tab-inner">
            <div class="react-component">
              Add
              <b>FARM</b>to MetaMask
            </div>
            <img src="../assets/metama.png" class="gl" alt="">
            <div class="harvest__Stake-tab-inner-1">
              <h3>
                <img src="../assets/weth.png" class="harvest__Stake-tab-inner-1-img" alt="">
                Profit Sharing
              </h3>
              <span>
                Deposit:
                <b>Creativity</b>
              </span>
              <span>
                Earn:
                <b>FARM</b>
              </span>
            </div>
            <div class="harvest__Stake-tab-inner-2">
              <button class="harvest__Stake-tab-inner-2-buton">
                <div class="inner-2-buton">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </button>
              <b></b>
              <div class="Cy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
  <div class="close">
  <div v-if="clo" class="metamat">
    <div @click.prevent="clo=!clo" class="metamat__xx">
      <div class="Knnv"></div>
      <div class="web3__card">
        <div class="wrapper">
          <div class="container">
            <div class="container-img">
              <img src="../assets/metama.png" alt="">
              <div class="name">MetaMask</div>
              <!-- <div class="description">Connect to your MetaMask Wallet</div> -->
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="container">
            <div class="container-img">
              <img src="../assets/mt.svg" alt="">
              <div class="name1">WalletConnect</div>
              <!-- <div class="description">Connect to your MetaMask Wallet</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      click: true,
      clo: true,
      click1: true,
      click2: true,
      click3: true
    }
  },
  methods: {
    openTab: function () {
      var close = document.querySelector('.closeTab')
      close.classList.add('openTab')
      this.click = true
    },
    openStab: function () {
      var close = document.querySelector('.closeStab')
      close.classList.add('openStab')
      this.click1 = true
    },
    openBTC: function () {
      var close = document.querySelector('.closeBTC')
      close.classList.add('openBTC')
      this.click2 = true
    },
    openShu: function () {
      var close = document.querySelector('.closeShu')
      close.classList.add('openShu')
      this.click3 = true
    },
    openMatmak: function () {
      var close = document.querySelector('.close')
      close.classList.add('open')
      this.clo = true
    }
  }
}
</script>

<style>
.close{
  display:none;
}
.close.open{
  display: block;
}
.closeTab{
  display:none;
}
.closeTab.openTab{
  display: block;
}
.closeStab{
  display:none;
}
.closeStab.openStab{
  display: block;
}
.closeBTC{
  display:none;
}
.closeBTC.openBTC{
  display: block;
}
.closeShu{
  display:none;
}
.closeShu.openShu{
  display: block;
}
.harvest__Stake{
  max-width: 750px;
  margin: 0px auto 40px;
  text-align: center;
}
.harvest__Stake-title{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.harvest__Stake-content{
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  text-align: left;
  background-color: rgb(255, 252, 230);
  height: 40px;
  box-shadow: black 3px 3px;
  width: -webkit-fill-available;
}
.harvest__Stake-content button{
    font-weight: bold;
    margin-left: 20px;
    background-color: rgb(238, 191, 101);
}
.harvest__Stake-content-button{
  width: 160px;
  min-height: 40px;
  border-radius: 3px;
  border: 2px solid rgb(53, 52, 47);
  background-color: rgb(255, 252, 230);
  font-weight: bold;
  cursor: pointer;
  outline: 0px;
  transition: all 0.25s ease 0s;
}
.harvest__Stake-title-2{
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 20px;
}
.h3{
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.harvest__Stake-tab-x{
  height: auto;
  transition: none 0s ease 0s;
  overflow: visible;
}
.harvest__Stake-tab-xx{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.harvest__Stake-tab-inner{
  cursor: auto;
  padding: 25px 15px;
  border: 2px solid black;
  background-color: rgb(255, 252, 230);
  text-align: center;
  position: relative;
  box-shadow: black 3px 3px;
}
.react-component{
  left: 706px;
  top: 199px;
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  padding: 8px 21px;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.gl{
  position: absolute;
  top: 2px;
  right: 5px;
  width: 18px;
  height: 18px;
  filter: grayscale(100%);
  cursor: pointer;
  transition: all 0.2s ease 0s;
}
.harvest__Stake-tab-inner-1{
  display: grid;
  gap: 20px;
}
.harvest__Stake-tab-inner-1 h3{
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  font-size: 16px;
  height: 26px;
}
.harvest__Stake-tab-inner-1-img{
  width: 22px;
  height: 22px;
  margin-right: 5px;
  border-radius: 1px;
}
.harvest__Stake-tab-inner-2{
  display: grid;
  gap: 10px;
  margin-top: 20px;
}
.harvest__Stake-tab-inner-2-buton{
  width: 100%;
  min-height: 40px;
  border-radius: 3px;
  border: 2px solid rgb(53, 52, 47);
  background-color: rgb(238, 191, 101);
  font-weight: bold;
  cursor: pointer;
  outline: 0px;
  transition: all 0.25s ease 0s;
}
.inner-2-buton{
  display: contents;
}
.body__tab-stablecoins-1{
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: 2px solid black;
  background-color: rgb(255, 252, 230);
  flex-direction: column;
  transition: all 0.25s ease 0s;
  padding: 10px;
}
.menu__StaCoins{
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: overlay;
}
.menu__StaCoins-1{
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 130px;
  font-size: 16px;
  flex-direction: row;
}
.menu__StaCoins-1 span{
  font-size: 16px;
}
.menu__StaCoins-1 b{
  margin-left:5px;
}
.menu__StaCoins-2{
  width: auto;
  display: grid;
  margin-right: 10px;
  margin-left: 10px;
  height: 100%;
  grid-template-columns: 130px 130px 130px;
  grid-template-rows: 20px 20px 20px;
  gap: 5px;
}
.menu__StaCoins-2-img{
  font-size: 14px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.img_icon{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.menu__StaCoins-3{
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
  min-width: 160px;
}
.creaz{
  display: contents;
}
.menu__StaCoins-3-icon{
  font-size: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.menu__StaCoins-3-icon img{
  margin-left: 3px;
}
.moon{
  width: 20px;
  height: 20px;
  margin-right: 5px;
  font-size: 12px;
}
.creaz{
  display: contents;
}
.iconClose{
  display: none;
}
.metamat{
  transition: opacity 0.1s ease-in-out 0s;
  text-align: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin-left: -50vw;
  top: 0px;
  left: 50%;
  z-index: 2;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.metamat__xx{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.Knnv{
  position: absolute;
  inset: 0px;
}
.web3__card{
  border-radius: 0px;
  border: 2px solid black;
  background-color: rgb(255, 252, 230);
  box-shadow: black 3px 3px;
}
.web3__card{
  position: relative;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  margin: 10px;
  padding: 0px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  max-width: 500px;
  min-width: fit-content;
  max-height: 100%;
  overflow: auto;
}
.wrapper{
  width: 100%;
  padding: 8px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0px;
  border: 1px solid rgba(195, 195, 195, 0.14);
}
.wrapper{
  box-sizing: border-box !important;
}
.container{
  border-radius:0px;
  background: transparent;
  transition: background-color 0.2s ease-in-out 0s;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 24px 16px;
  /* width:458px;
  height:162px; */
}
.container-img{
  width: 45px;
  height: 45px;
  display: flex;
  border-radius: 50%;
  overflow: visible;
  box-shadow: none;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.container{
  box-sizing:border-box !important;
}
.container{
  border-radius: 0px;
  background-color: rgb(238, 191, 101) !important;
}
.container img{
  width:100%;
  height:100%;
  margin-top:-26px;
}
.name{
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0.5em;
  color: rgb(12, 12, 13);
  margin-top: 133%;
  margin-left: -75px;
}
.name1{
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0.5em;
  color: rgb(12, 12, 13);
  margin-top: 133%;
  margin-left: -93px;
}
.description{
  width: 100%;
  font-size: 18px;
  margin: 0.333em 0px;
}
</style>
