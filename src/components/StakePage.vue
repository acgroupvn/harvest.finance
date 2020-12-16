<template>
  <div>
    <div class="stakePage">
      <h2 class="header">Earn<img src="../assets/farm.png">FARM with Harvest</h2>
      <div class="connect_wallet">
        You haven't connected a wallet.
        <button type="button">Connect Wallet</button>
      </div>
      <h3 class="title">Stake your LP tokens for rewards</h3>
      <div class="Collapsible open">
        <div class="Collapsible_contentOuter">
          <div class="Collapsible_contentInner">
            <div class="stake_dashboard">
              <img class="metamaskIcon" src="../assets/metamask.png" alt="img">
              <div class="stake_info">
                <h3><img src="../assets/farm.png" alt="img">Profit Sharing</h3>
                <span>Deposit:<b> FARM</b></span>
                <span>Earn:<b> FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  <div class="load">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </div>
                </button>
                <b>Auto-compouding</b>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
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
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
                <b>14,200 USD in prizes</b>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <span>💻</span>
                  Developer Farm
                </h3>
                <span>
                  Deposit:
                  <b>Code</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
                <b>5,000 USD in prizes</b>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/eth_dpi.png" alt="img">
                  UNI:ETH-DPI
                </h3>
                <span>
                  Deposit:
                  <b>fUNI-ETH-DPI</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
                <b></b>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/eth.png" alt="img">
                  WETH Farm
                </h3>
                <span>
                  Deposit:
                  <b>fWETH</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
                <b></b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Collapsible">
        <div class="Collapsible_trigger" @click="showContent">
          <div class="trigger_container">
            <div class="trigger_head">
              <span>
                <i class="fas fa-angle-down iconClose"></i>
                <i class="fas fa-angle-up iconOpen"></i>
              </span>
              <b>FARM Liquidity</b>
            </div>
            <div class="trigger_center">
              <div class="coin">
                <img src="../assets/farm-usdc.png" alt="img">
                FARM/USDC
              </div>
              <div class="coin">
                <img src="../assets/farm-weth.png" alt="img">
                FARM/ETH
              </div>
              <div class="coin">
                <img src="../assets/farm-grain.png" alt="img">
                FARM/GRAIN
              </div>
              <div class="coin">
                🌕 Moonswap
              </div>
            </div>
            <div class="trigger_apy">
              <span>
                APY:
                <b>
                  <div class="load">
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
        <div class="Collapsible_contentOuter">
          <div class="Collapsible_contentInner">
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/farm-usdc.png" alt="img">
                  FARM/USDC
                </h3>
                <span>
                  Deposit:
                  <b>FARM_USDC_LPy</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/farm-weth.png" alt="img">
                  FARM/ETH
                </h3>
                <span>
                  Deposit:
                  <b>FARM_WETH_LP</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/farm-grain.png" alt="img">
                  FARM/GRAIN
                </h3>
                <span>
                  Deposit:
                  <b>FARM_GRAIN_LP</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <span>🌕</span>
                  Moonswap
                </h3>
                <span>
                  Deposit:
                  <b>cFARM-cETH MLP</b>
                </span>
                <span>
                  Earn:
                  <b>cMOON</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Collapsible">
        <div class="Collapsible_trigger" @click="showContent">
          <div class="trigger_container">
            <div class="trigger_head">
              <span>
                <i class="fas fa-angle-down iconClose"></i>
                <i class="fas fa-angle-up iconOpen"></i>
              </span>
              <b>Stablecoins</b>
            </div>
            <div class="trigger_center">
              <div class="coin">
                <img src="../assets/ycrv.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/three-pool.png" alt="img">
                3CRV
              </div>
              <div class="coin">
                <img src="../assets/curve-husd.png" alt="img">
                CRV:HUSD
              </div>
              <div class="coin">
                <img src="../assets/curve-compound.png" alt="img">
                CRV:COMPOUND
              </div>
              <div class="coin">
                <img src="../assets/curve-busd.png" alt="img">
                CRV:BUSD
              </div>
              <div class="coin">
                <img src="../assets/curve-usdn.png" alt="img">
                CRV:USDN
              </div>
              <div class="coin">
                <img src="../assets/usdc.png" alt="img">
                USDC
              </div>
              <div class="coin">
                <img src="../assets/usdt.png" alt="img">
                USDT
              </div>
              <div class="coin">
                <img src="../assets/tusd.png" alt="img">
                TUSD
              </div>
              <div class="coin">
                <img src="../assets/dai.png" alt="img">
                DAI
              </div>
            </div>
            <div class="trigger_apy">
              <span>
                APY:
                <b>
                  <div class="load">
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
        <div class="Collapsible_contentOuter">
          <div class="Collapsible_contentInner">
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/ycrv.png" alt="img">
                  yCRV Farm
                </h3>
                <span>
                  Deposit:
                  <b>fYCRV</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/three-pool.png" alt="img">
                  3CRV Farm
                </h3>
                <span>
                  Deposit:
                  <b>f3CRV</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/curve-husd.png" alt="img">
                  CRV:HUSD Farm
                </h3>
                <span>
                  Deposit:
                  <b>fHUSD</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/curve-compound.png" alt="img">
                  CRV:COMPOUND Farm
                </h3>
                <span>
                  Deposit:
                  <b>fCRV-COMPOUND</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/curve-busd.png" alt="img">
                  CRV:BUSD Farm
                </h3>
                <span>
                  Deposit:
                  <b>fCRV-BUSD</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/curve-usdn.png" alt="img">
                  CRV:USDN Farm
                </h3>
                <span>
                  Deposit:
                  <b>fCRV-USDN</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/usdc.png" alt="img">
                  USDC Farm
                </h3>
                <span>
                  Deposit:
                  <b>fUSDC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/usdt.png" alt="img">
                  USDT Farm
                </h3>
                <span>
                  Deposit:
                  <b>fUSDT</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/tusd.png" alt="img">
                  TUSD Farm
                </h3>
                <span>
                  Deposit:
                  <b>fTUSD</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/dai.png" alt="img">
                  DAI Farm
                </h3>
                <span>
                  Deposit:
                  <b>fDAI</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Collapsible">
        <div class="Collapsible_trigger" @click="showContent">
          <div class="trigger_container">
            <div class="trigger_head">
              <span>
                <i class="fas fa-angle-down iconClose"></i>
                <i class="fas fa-angle-up iconOpen"></i>
              </span>
              <b>Stablecoins</b>
            </div>
            <div class="trigger_center">
              <div class="coin">
                <img src="../assets/curve-hbtc.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/tbtc-mixed.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/crvrenwbtc.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/wbtc.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/ren.png" alt="img">
                YRCV
              </div>
            </div>
            <div class="trigger_apy">
              <span>
                APY:
                <b>
                  <div class="load">
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
        <div class="Collapsible_contentOuter">
          <div class="Collapsible_contentInner">
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/curve-hbtc.png" alt="img">
                  CRV:HBTC Farm
                </h3>
                <span>
                  Deposit:
                  <b>fCRV-HBTC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/tbtc-mixed.png" alt="img">
                  CRV:TBTC Farm
                </h3>
                <span>
                  Deposit:
                  <b>fCRV-TBTC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/crvrenwbtc.png" alt="img">
                  CRV:RENWBTC Farm
                </h3>
                <span>
                  Deposit:
                  <b>fCRV-RENWBTC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/wbtc.png" alt="img">
                  WBTC Farm
                </h3>
                <span>
                  Deposit:
                  <b>fWBTC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/ren.png" alt="img">
                  RENBTC Farm
                </h3>
                <span>
                  Deposit:
                  <b>fRENBTC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Collapsible">
        <div class="Collapsible_trigger" @click="showContent">
          <div class="trigger_container">
            <div class="trigger_head">
              <span>
                <i class="fas fa-angle-down iconClose"></i>
                <i class="fas fa-angle-up iconOpen"></i>
              </span>
              <b>Sushiswap</b>
            </div>
            <div class="trigger_center">
              <div class="coin">
                <img src="../assets/sushi-dai.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/sushi-usdc.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/sushi-usdt.png" alt="img">
                YRCV
              </div>
              <div class="coin">
                <img src="../assets/sushi-wbtc.png" alt="img">
                YRCV
              </div>
            </div>
            <div class="trigger_apy">
              <span>
                APY:
                <b>
                  <div class="load">
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
        <div class="Collapsible_contentOuter">
          <div class="Collapsible_contentInner">
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/sushi-dai.png" alt="img">
                  DAI-ETH
                </h3>
                <span>
                  Deposit:
                  <b>fSUSHI-ETH-DAI</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/sushi-usdc.png" alt="img">
                  USDC-ETH
                </h3>
                <span>
                  Deposit:
                  <b>USDC-ETH</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/sushi-usdt.png" alt="img">
                  USDT-ETH
                </h3>
                <span>
                  Deposit:
                  <b>fSUSHI-ETH-USDT</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
              </div>
            </div>
            <div class="stake_dashboard">
              <div class="stake_info">
                <h3>
                  <img src="../assets/sushi-wbtc.png" alt="img">
                  WBTC-ETH
                </h3>
                <span>
                  Deposit:
                  <b>fSUSHI-ETH-WBTC</b>
                </span>
                <span>
                  Earn:
                  <b>FARM</b>
                </span>
              </div>
              <div class="stake_nav">
                <button type="button">
                  Select
                </button>
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
  methods: {
    showContent: function (el) {
      const coll = document.querySelectorAll('.Collapsible')
      for (let i = 0; i < coll.length; i++) {
        if (coll[i].contains(el.target)) {
          coll[i].classList.toggle('is-open')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .load{
    display: contents;
    span{
      display: inline-block;
      margin-left: -4px;
      animation: 1.4s ease 0s infinite normal both running load-effect;
      &:nth-child(2){
        animation-delay: 0.2s;
      }
      &:nth-child(3){
        animation-delay: 0.4s;
      }
    }
  }
  .stakePage{
    max-width: 750px;
    margin: 0px auto 40px;
    text-align: center;
    h2.header{
      font-size: 1.4em;
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      justify-content: center;
      img{
        width: 25px;
        height: 25px;
        margin: 0;
        margin: 0 5px;
      }
    }
    .connect_wallet{
      display: flex;
      justify-content: center;
      font-weight: 600;
      font-size: 15px;
      align-items: center;
      padding: 10px;
      border: 2px solid black;
      text-align: left;
      background-color: rgb(255, 252, 230);;
      height: 40px;
      box-shadow: black 3px 3px;
      button{
        width: 160px;
        min-height: 40px;
        border-radius: 3px;
        border: 2px solid rgb(53,52,47);
        cursor: pointer;
        outline: 0;
        transition: all 0.25s ease 0s;
        font-weight: bold;
        margin-left: 20px;
        background-color: rgb(238, 191, 101);;
        &:hover{
          box-shadow: black 3px 3px;
        }
      }
    }
    h3.title{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 19px;
    }
    .Collapsible{
      display: block;
      .Collapsible_trigger{
        text-align: center;
        display: flex;
        margin-bottom: 10px;
        margin-top: 10px;
        width: auto;
        font-size: 16px;
        align-items: center;
        border: 2px solid black;
        background-color: rgb(255, 252, 230);
        padding: 10px;
        flex-direction: column;
        transition: all 0.25s ease 0s;
        box-shadow: black 3px 3px;
        &:hover{
          cursor: pointer;
          box-shadow: black 4px 4px;
        }
        .trigger_container{
          justify-content: space-between;
          font-size: 16px;
          width: 100%;
          height: 100%;
          display: flex;
          overflow: overlay;
          .trigger_head{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 130px;
            font-size: 16px;
            flex-direction: row;
            span{
              font-size: 17px;
              .iconOpen{
                display: none;
              }
            }
            b{
              margin-left: 5px;
              font-size: 15px;
            }
          }
          .trigger_center{
            width: auto;
            display: grid;
            margin-right: 10px;
            margin-left: 10px;
            height: 100%;
            grid-template-columns: 130px 130px 130px;
            grid-template-rows: 20px 20px 20px;
            gap: 5px;
            .coin{
              font-size: 13px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              img{
                width: 20px;
                height: 20px;
                margin-right: 5px;
              }
            }
          }
          .trigger_apy{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            span{
              font-size: 15px;
              b{
                margin-left: 2px;
                text-align: left;
              }
            }
          }
        }
      }
      &.open{
        .Collapsible_contentOuter{
          height: auto;
          max-height: 1000px;
          overflow: hidden;
        }
      }
      &.is-open{
        .Collapsible_trigger{
          .iconClose{
            display: none;
          }
          .iconOpen{
            display: block !important;
          }
        }
        .Collapsible_contentOuter{
          max-height: 1000px;
        }
      }
      .Collapsible_contentOuter{
        display: block;
        transition: max-height 0.3s linear 0s;
        max-height: 0;
        overflow: hidden;
        .Collapsible_contentInner{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 40px;
          .stake_dashboard{
            cursor: auto;
            padding: 25px 15px;
            border: 2px solid black;
            background-color: rgb(255,252,230);
            text-align: center;
            position: relative;
            box-shadow: black 3px 3px;
            img.metamaskIcon{
              position: absolute;
              top: 2px;
              right: 5px;
              width: 18px;
              height: 18px;
              filter: grayscale(100%);
              cursor: pointer;
              transition: all 0.2s ease 0s;
              &:hover{
                filter: grayscale(0%);
              }
            }
            .stake_info{
              display: grid;
              gap: 20px;
              h3{
                font-size: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 26px;
                margin: 0;
                img{
                  width: 22px;
                  height: 22px;
                  margin-right: 5px;
                  border-radius: 1px;
                }
              }
              span{
                font-size: 15px;
                b{
                  font-weight: bold;
                }
              }
            }
            .stake_nav{
              display: grid;
              gap: 10px;
              margin-top: 20px;
              button{
                width: 100%;
                min-height: 40px;
                border-radius: 3px;
                border: 2px solif rgb(53,52,47);
                background-color: rgb(238,191,101);
                font-weight: bold;
                cursor: pointer;
                outline: 0px;
                transition:all 0.25s ease 0s;
                &:hover{
                  box-shadow: black 3px 3px;
                }
              }
            }
          }
        }
      }
    }
  }
  @keyframes load-effect {
    0%{
      opacity: 0.2;
    }
    20%{
      opacity: 1;
    }
    100%{
      opacity: 0.2;
    }
  }
</style>
