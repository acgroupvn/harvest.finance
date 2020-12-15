<template>
<div>
    <div class="harvest__faq">
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">What is Harvest?</div>
            <span class="harvest__faq-1-nd">
                Harvest automatically farms the 
                <b>highest yield</b>
                 available from the newest DeFi protocols, and optimizes the yields that are received using the
                 <b>latest farming techniques.</b>
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">What is FARM?</div>
            <span class="harvest__faq-1-nd">
                FARM is a cashflow token for Harvest, one of the largest autonomous hedge funds.
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">What are the token economics for FARM?</div>
            <span class="harvest__faq-1-nd">
                <ul>
                    <li>Farm holders receive cashflows from revenues on AUM, currently set to 30% profit sharing</li>
                    <li>Circulating supply at launch: 0</li>
                    <li>FARM has a current circulating supply of</li>
                    <li>FARM has a total supply over 4 years of 690,420</li>
                    <li>14,850 FARM has been burned in week 3</li>
                    <li>5,846.9 FARM has been burned in week 4</li>
                    <li>Harvest was completely bootstrapped, with no VCs and no premine</li>
                </ul>
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">What is fDAI, fUSDC, fWBTC?</div>
            <span class="harvest__faq-1-nd">
                fDAI, fUSDC, fWBTC are the yield-bearing versions of these assets, which are being automatically farmed by the harvest algorithm.
                <br>
                These assets are automatically appreciating, and you can redeem them at any time for DAI, USDC, wBTC.
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">What was the reason for launching Harvest?</div>
            <span class="harvest__faq-1-nd">
                <ul>
                    <li>We were looking for a convenient way to farm the latest projects that were producing different reward tokens. The process was highly manual and inconvenient for people that had a normal job and didn’t want to keep up with DeFi 24/7.</li>
                    <li>Gas prices have been really high, and it was expensive to farm by ourselves, so we pooled our funds together to try to save on gas. We decided to build the solution that we were looking for ourselves, and hopefully will help many others.</li>
                </ul>
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">What is the road map for Harvest?</div>
            <span class="harvest__faq-1-nd">
                <ul>
                    <li>Yield farming is not going away, and gas prices are not getting lower. Our goal is to simply provide an easy way for people to benefit, and make your hard work much easier, while looking for safe projects to add to the farming repertoire.</li>
                    <li>We plan to add more assets over time. DAO funds can be used to add useful integrations, provide bug bounties and pay for security audits, and even fund projects to build on top of Harvest and add value to FARM holders.</li>
                </ul>
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">How does the Profit Share work? Where does the 30% come from?</div>
            <span class="harvest__faq-1-nd">
                 <p style="margin-top:0px;">The Harvest Cooperative is comprised of humble farmers pooling resources together in order to earn profits and become the largest industrialized farming co-op in the world. When farmers deposit, Harvest automatically farms the highest yield with these deposits. 70% of these profits are distributed back to the depositors. The other 30% of profits are used to market buy FARM tokens en masse. These FARM tokens are then distributed proportionally to the Harvest Cooperative who stakes FARM tokens in the profit share pool. This aligns long term incentives with our FARM holders.</p>
                 <p>In addition, the Profit Share pool also receives weekly FARM emissions from the total supply of 690,420. The breakdown of emissions can be found in the weekly Medium updates from the team.</p>
                 For detailed mechanics of FARM and the profit share pool, you can read more here: 
                 <a href="">here</a>
            </span>
        </div>
        <div class="harvest__faq-1">
            <div class="harvest__faq-1-question">Smart contracts and audits</div>
            <span class="harvest__faq-1-nd">
                <ul>
                    <li>The Harvest smart contracts are
                        <a href="https://github.com/acgroupvn/harvest.finance/tree/nguyet-branch">here</a>
                    </li>
                    <li>The Harvest smart contracts have been designed from the ground up with security in mind, by using as many audited components as possible. Please review the smart contracts before depositing funds.</li>
                    <li>Harvest's audit reports are
                        <a href="">here</a>
                    </li>
                    <li>We would like to thank Haechi, Peckshield and CertiK for their hard work on the audits.</li>
                    <div style="margin-top:10px"></div>
                    <div style="width:100%; display:flex; justify-content: space-around; align-item:center; flex-wap:wap;">
                        <a href="">
                            <img src="../assets/faq-1.png" style="width:230px;" alt="">
                        </a>
                    </div>
                </ul>
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.harvest__faq{
    max-width: 750px;
    width: 100%;
    gap: 20px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
}
.harvest__faq-1{
    width: auto;
    padding: 20px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border: 2px solid black;
    margin-bottom: 10px;
    background-color: rgb(255, 252, 230);
    box-shadow: black 3px 3px;
    word-break: break-word;
}
.harvest__faq-1-question{
    font-weight: bold;
    margin-bottom: 20px;
}
.harvest__faq-1-nd{
    width:100%;
}
.harvest__faq-1-nd li{
    margin-bottom: 5px;
}
</style>