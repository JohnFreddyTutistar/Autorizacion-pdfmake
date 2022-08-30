import { Component } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-nominaPdf',
  templateUrl: './nominaPdf.component.html',
  styleUrls: ['./nominaPdf.component.css']
})
export class NominaPdfComponent {

  generar() {
    const pdfDefinition = {
      content: [

        //cabecera

        {
          style: 'tableExample',
          table: {
            widths: [140, '*', 110],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  rowSpan: 4,
                  image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdkAAABkCAYAAADKZEodAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAATiNJREFUeNrsXQd4VcXWXbekV0KoofeOVKWIYMGCFRsPFbvvoT674vPZnjwFf1Aeig17V8SCDRVFRJDea+glJCGk93LvPf9ec+5NbpKbnlBnfd9oOPeUOXPOmTV7z561LYZh4CREtJTWUtpLaSMlRkpjKWFS/KVYoKGhoaFxLFAoJV9KupTDUuKl7JeyT8ohKXkn083aT5J76CZlgJTBUnpKaSclSkqoJlQNDQ2NE4J4s90ku1vKeikrpWxwk/
                AJC8sJasnSIh0u5WIpZ7lJ1qbfUw0NDY2TCrR210hZIOVHKZs0yTYsBkq5TsoVUtrq909DQ0PjlEGRlL+kfCxlnpQkTbL1A7qDL5PyDylnS7Hqd01DQ0PjlEailM+kzJayTZNs7XGNlIekDNLvlIaGhoZGGeRK+UjKC1J2aJKtPkZI+Y+Ukfod0tDQ0NCoAllSXpEyTUqqJtmK0dRNrn+HjgrW0NA4xeFyueB0OlV36Odn1w1SNfZI+ZeUOZpky+NyKS/CXNuqoaGhccoRamZmNjKyMpGdlY2szCwE+vuhdcumaBwdBdgCUOgw4JJ9A/10aEoV
                +ETKgzDnbk95kg2UMkXKffq90NDQONWQkZGBxMQkJKekIi8vH0VFRbDZbOjdrQP8wqLxy44MfLjhMH7anwGk5wP5Duk17YhoHYbH+7fAuIEt0apRoG7I8tgr5U4pP53KJNtByntSztTvg4aGxqmEtPR07N9/EMnJqXA6XYpYDcOFoEB/DB7QF19vzca4d9cD25Kkp7YAATYgxB9DR7bFiDbhiD2Sh68X7AHk2CtHd8SMK7qidVSQbtgyDgIp/5Yy9VQk2eFuk761fg80NDROFRQWFmLnrj2Ijz+sSNVuN+daXS4D/n5WDDtjAO777gBmvbkWiAnFE1d2E+PVwHSxZv+4pjs2J+Tg+y1JGNQqHJeJJdt/xgpg8xHpScPw3q39cOPQVrqRy4PG3ESYco6nBMlSTOIDmLKHGhoaGqcEUlPTsHVbLHJy8soFMjkcDpw5qDdeXJWNx19YBrQMxbLHh+OjNQlgL33H0NYYP2cLtv62D7Bbha2daDKqHT6/rAvO/tfvyqJluOjk2/rh8TGdUSD/DNBTt974Rco4OhFOdpIdL+V9nAi6yXv2ABs2AFu2APvkxU5KArKygNxcwCpvb0gI0KgR0Lw50KkT0LMn0KOHfBwtj6/
                7OHwY2LkT2L4d2LsXSEgA0tM5pDbvIzwcaNLEvIdevcx74L81NDTqDYcOJWDb9lh2u/LZlWY/h9OJti2awBHVDr3u/QlIzsWdEwcgIsCOKS+vkr7GDwjzB/IcptvYg4wCvP3YcBxMy8PTP+ySi2Qq1/JH/xqGbqfFoJn0760C9UINL8joRYkbHTlZSZajCC4cPn51hkmkn35qllWrZHDoQtkW8ryyvrbb/OVDGDAAuPBC4JJLgNNOO/r3kJGh6o5ffwV+lxHupk1w5uWhOk9a3UNYGDBypDytceY98N8aGhp1GK/vw87de2G32YQDy5OesmLP6Ife7+zE7qUHMO32fri0d1N0nb4c2C8DYiFbFfCk5matJZ1PoZirLcMwfUxHjOwWjSd/3o0f5
                +0AWoRi89TzMC3ThmdjbIjx10TrBWlUXHS0LNqjSbJjpHwpJeC4bHZadTNnAlOnwpGaqsimNq+l4fV/jlWtI0YAt90GjB1rWr4NBflIFaF+/jnw/fdwivVqeN2DpYb34LkPe7t2wL//bd6DhoZGjXHgQJxYsDvg5+fn+3uTPjg0yB+N2vdA10mL8PWDZ2DRzhTM/GWPslRhs5hk2j0ayJV+ilHG/raSD5u/
                5RUJsYZh2aNDMeS1NcDGJDz7zwEIGdIV9yUWIrmLHxr7aaL1gnSWEAsCOQ19oaPlsaew/yfHLcHu3q0sN8cjj8ApBGtF7ZUwPOTsaVjH4sVwTJgA9O4NvPyyPNJ6fqZ0+86apSxm5+jRcLz9tiJYTx1qM1jwHMvi3LcPjttvBy64gP4u/WlqaNQAhw8nIXbHruLgJl/g+timURH4JTYdjbs3xuGMfMx8c53YWfkmwZo7ISLMD7/cehrgZyMzl4yIuWY2IkC5it9fk4ArxQLmR/zvdYk4I1B2yDMwcX8RHIZ+Hl4YBXPassE58GiQLBOmz5USflw29fr1wLBhcCxbVidyrayBFVnt3QvHPfeY7uM59SBGUiAj3FdeUeTt+Oc/4dyypRSx1purw31Ox88/A2eeCezapT9PDY1qIEcG1Fu37VDuYV8uYm9LNiw8DIv2ZuCc6GD8sCPVdA97C04E2ZHx50Gk5DiAzo1N67XUSczSISIQ+7IKzWOP5MG/yCnnsuCLDBdeinfoh1IaV0p57kQnWfpHGEV8fKalowV77rlwiOXX0A3hISunkJTj2mvl8crzPXiwdif77Tdg8GA47r4bzri4GhOrxx3schdv93BlL4qDQVNjxsgIO01/nhoalX1jQpyMIi5yOMoFOfkCLd0VmQWYczgbY3tEAyTHQilO+TJpguYUKQGKpuH+QHaBOTdLa7ZIvuDcIuVW7npOewzv2AhrVh5S+8Lhkp/dZGy34MEkp1xDm7NlMAlmrNAJS7LUIT77uGzaInkxr7sOjpSUo5o7r9gy/OorYOBA4KcaiJHk5wMPPginDAycGzdWm1y9CZVgYJOtSxfYhw+H/ayzYOvXDzZGSXuRbkUvS+GOHcB9WpxLQ6MyMJI4NTVDBTpVB1wja6VreEU8QsWKnXrfYKBluBlJHBkAS/8W+OThIfhkZTyw7Yj54XMZT0wY+p/VFm89MhTvXd4FQzkfm11k9gzBfvCjm9rL6P37IYda2qNRCq9J6dxgfX4DBj6dA3Nd0vG5Umv2bDj+/
                neflTNwdLITeK5jpdv3zjsr35lu2htugGP58mo3qMt9fluzZsB55wFCqBBCRdu25tIj7w6A1unWrcCPPwKvv67mpi2V1Nu2eLHpPtbQ0CgFik0sW75KrFgnrJaqexJGFg8+rTuunHcYC+dtU0t1/nlFN9w2rLUYpFbsSc5Fi8hAtJLyyYpDiKSkYpAfQoPtcqwLu1Py8NnmJCxeEmdGIAfZFNGeeXZbTL7ldIzcUVCynkOM4/db2TGhqU0/qNL4020Q1rtPvaHWqnLNx6vHLcHSIpw61SeJWENDgb594Vy6tE5Eq4ioa1egTx84vvjCZ0NY3Ps57roL9rw8ZaX6xJIlyr3sSEqqVoO63A1vv+giMyp41CgZDUdWfhBJd9gws0ycCNsll8C5fr3PNlDDsunTNclqaPjAwYOHpIspqDCa2HeXlIfhLUKxUCxauoI7RgWpAKiIYH/4C9EeSsvHE9/vxKrMAiRyrWx2IcC5V2oZ013MDzVIuvNAm9t1ZeCuwTFYnFPGYpCO4cYkJy6LsiFCJ/XxBjszdsDPnygk+6SULsdtc/
                71lwpEsvgij8GDgREjYNQDySrC6tgREJKt0JXgLo6HHoI9MBAQwi0FsSyNK66AS0bH1upckw+V872PPmq6o2uDVq1UUJWF9fc1EOF/fviBaxOANm3056mh4UZRkQOH4uMrjSYu9z1ZrUhKTsdlfTriGZsVb941EAdT8zD6qcWmS1gsWBQIsYrFKqaxWSzu/9PFHFKGzBkU1bERBvZqjnH7ikqbOu4lPz+lu3BttJaDKoMnpHwjJbY+T9oQrdxHyj+P66ZcvNjnvKPaJpanIpn6ANWTWrSo9oNw3n03wCheDxYsgEssShJsVYTvclvONpLf3Lm1J1gPTjsN1ujoCudnqVCjLGwNDY1iHDmSLFZpYaXRxD5JNjUDrYMdmD/1HNjl2GfeWm8SKb/AlFwz8IlkSmuV87T+VhXM5LNjKHRiyuj2WO6wl49CVkRrwewUB41djdKgkMGU+j5pQ5Dsszhe18N6QInBikCJRHnp6zonq46nQERaWrXPpd55WqDEunXAxRfDcLkqPd4TGWyfOBFYsQKgi7g+QOlIKZXWnXKTGhoaxUjkGnWLpVY9RtzeXTickoGbZ602xSZsJiEqa9ZWg3PK7j1ahmNjnlHh7wvlt825OgLKB6irP/
                p4Jlku8L34BBhuVtwYlFUUgqsryTJtlVqiI6VG56IcI4OQOCdahQVruEfBtjffBF59FYiIqL82EivVSaKtdFSgh8IaGh7k5+cjIyOrWkt2fFmz2Tl5KEqNAwqc5sZgf6CWn9jryw7ib40r6T2EX//I1CRbAf5Tn9xY3yT77xOiCV2+Xy5rcLBpwVWgL1pda1R9FwwkSk1V1mxFWsdl3nnYTz8deO454Npr4Th0qFKCVe7hyEhYFixoGMnDl16q+vvu0kV/jhoabqRlZKqE67XtOzjtenrbcNx8SQe8dvdgoFMjc2NNEWTH/IX7UXAwFY+28DPX2pY3nPFTlgt6mOwTZ8CUXDzuSJZRMmefEE3oFWlb6iXjUpfMTKWmxKVNaomNfDCGF3lWVhTxtWsHGyOUmcWG2W+4HldGqdaAANgYUFXBcXYmFvjyS+D//g8OIU5rVYQcEyND0T+kxRugyefOheP33yutg40diY4u1tAoRkZaep2OZ59j9fPHtMu74lBmHrD4QOmMO9Xu1S1KzOKMN9fhpnCjtHKUV8//Yz6QUqRptgI8hHpayVmf0cX/xNFZXlp39OoFlxAaXz1FiC+8YGau4TwoVaAuuABWumCpcBQSAhuz2XA7yblxY8qzmNYwrV5qBzP9HcFUd4zsZeg+XdJMODB6NCyUbqToRGKi6UbmnHDr1vKGp5jztiRMIVeeyzVpUtUEy8CshQuBzg2wfprrcW+5pUor2s7sPIyc1tDQUMjOyamVq7h44Cp9wxEZmO/PtmLRwTyceVEn/Mlk7On5NZuT5Qfqb0PfqEA0MRzo62/FBs7Plj2FWLj75dTRfvrZ+cBwKUOlLD1eLFmu47j4hGm+++6D/9NPwzp8uCnMQIH96GjgxReBNWtk9BhgumBjY2HIfkpvmAL5UVHyYjpNYuQ+DJJilhrmYSVRChE777jD1CYWK89FQX2SMSOMp06Fk+fnfCvnMjdtMgX3qUEspIYzzgDGj6/
                apUyCZbadhiBYWt6XXQanDBosVb00TzyhP0MNDTcoKME52dq6ikt4z4YOTSPwwoUdcW4HGdRnFtS8lxYr9qP7Tsec+4bh8WQSrAsVLXjfX6gt2UpQL/Nw9WXJUvsx5IRpOlqky5bB6bUExSJEZz3vPDjlY7GRRP/8Ew63teucMaNCUYay2/lv5/
                z5sC1aZBImSfSzz1CYmqoamwIPnv2UYAVT7NEqfOMNONxSiajgWnbO83KJD0m9vsEgrYsvhmPr1qot6QceqPsSIQ2NkwiciyXR1rlDlo8vJSMXH25IwRuL9yn9YZ/u3orAAbxYsT2bBePrNAOvJYtR4FexdluCJtnKwOTuzWh+HGtL1oYGFlhuENx6azHZeV5B54IFJjFyXpZJz70ayeKj+NpeTLSeJOm0XMVqtXr9VioQSixcBAUBDz1UqfVooRtq3jygR4/6bwsSv1jelZF8McEyZd/kyfrz09AoRbIOOJ1GnSxZNSdr90O7Vk1xTvfGeOWmvqbQv7MGJ8l14MIz26B9m0gsySwy19JW2KlYkFikI4wrAQXd6+yhrQ+SlV4XfU+45rv6atgmTvTWzi4hOc6x7ttXp9MXk+mePcoF7Utdyk53M8X2hbQc2dkVkqySSXzttYYJNCJxDxsG5/79lb4Mqr70ADA4i1HYGhoaxaAVWx868EFihf6yOQkr92fgrvm7zOU8NYl9Eqt3/u40uAqdWOmomvB13FOVuOp4INmLcLxqFFeFadNg79mzPNEuWgR8/329CFIY330HowKSxeOPm1bz9OkVNqCyHpn0nXO99QnOFT/zDJyXX67Ww1a5HpfBXNImDTIXrKFxwqPuMZ9OpxO9enZFptOO5HyxQrOKan5al4E51/bAiiI/JBUZqPLD1qgKDH5qUZcT1Ac5jj5hmy8kRAUp2YOCit835eqNjfWpbVwbeJYClbMKw8OB2283l+xUMJej9mvZEvjf/+r3vmldX3ABHE89Vcp9XRHJMwLb8ssvphazhoZGg1B0aEggtiVkIyXPgZsGx0jXHmLOyXqDyQCYIEAlCShS7uFS62Dl71ViBR+ki9nhauhxwakA6ahRp46vroFPnBQ+7YRuQs5x/vADrEI6Ho3ghn731Cfxz3+akcozZ1Y+0qGb2J3rtV7wzjvKRe3IyqpyhKWsaEZPM/ctU+RpaGj4hJ+/X62X77hcLlVGjRiE5xcmYPKSA5i8PA7YlASE+ZVYnAVOjLmwE24b2AJ2udaBtFy8sz4Ra9Ylmct82HEJ6ToLHIi2V68jCrNppq0GqGQ491iRLAk24sRvwlGwLFsG29VXwyFWXkP7vpWQA/PHfvghHLm5Pq+nCG7MGODSS+vnops3A5MmwfHjj8VBW1US7LnnAu+9Zy5Pqi64dpgR1fU5MNDQOM7B5OwkWbp8axL8RHINDw9DeFgIlsSmwFXkwuZ7BqHXW+vMqGKjxIIdc35HvHV7f0yNN5DjMtC3tRVvndEe/hk5+G1jIlYeyMCQdpEYc0YbnB9XZIpSVMGyTe2aZKuB01GyIOSok+zJs46jf3+1rMd+661wfP99gxFtMXnRDfzSSxVazSrZ87PP1v2CFMuYMQPGc8+p5UnVTpf32GPAf/5jCm/UBHIdY9o0WMaPB8aNA0aONNcUa2icxPAXS9bf3y5jTCdqEmDscDjlo3OhW7eusDy2CC3C/bDkUCZwKEtG415fq5z0jjNaYdIhAx8cLjAJ1L2GcGRYAG4Y1BE3DAPihVvbHZD/FLiqMRloQUyAJtlqgPqxzaUkHAuS7XtSNWXTpsC338L
                +zDNwPf20z3Ww9QIGMYll6dyyxef5FRFfdZVKHl9rcP2tWMoMbnIcOFB965X5Yd94wxTfqA1uv10pXBWKBWxjYeJ6im1Q3INiHhoaJyGo1hQUGIScnDxUJxyYfYuf3YYO7dvA4XRh+oK9+PCyztjH5OyvrjZT2tm9vljDQL7DZaY3UzllS35alO3EokyvdT5WVC/aRvZp66+fXTUQ5ibaWpFsXQw2C47nxOy1viu5raeegvXnn2GLiUF9riJTgUzUKD7/fOCjjyr0PSji5dKe2oDzvJ9/DgwaBIcQm1MI1gpUL10eyZCKV7UlWIIKWnfdVXxNBpEVTppkegoqSzFYb41s6OxAGscEoWGh1V7G45LvNC8vX62JTbBE4eF316PIaWDm6gQzzZ29TNfsMrBwezIujbSgXKdkcfO6p1iq2xlZ0DZQJ26vJrrV9sC6tHCk24Q+OTF6tCIc+/jx6p2uj25bneO882RcJAOjL76oUEXKRkKizGJNwAhlOSdOPx2OcePgdAtLVCvZe5cusH33HfD226a8ZF3BeVyv718pXe3fX2GKwXoBlxfRPd2rl+kBePdd3S1oHFVENYqs1nws52Hbt2uDrp3b4aPVSXhzyQHsmnk+bvlxJ5IZ8BTowxIOsOONpQfRD0VoGWKre4ckx98QLAMDm35u1USHY0GyTfhendTNyqw8H38M+zvvwCbEWC9WLQOZdu2Ca8+eCkkW11+vMvdUC/n5pltYLFfnNdfAKQOD6pKrxWaDnWt1qW51cT1JT8u9GXPnlnqxFJHTSh4ypP6fES33O+6A45JL4BAL3rl1KxybNsHB61E4Q0PjKIEBTIGBAVVas4WFRWBur3btO+CGz2ORWeDAP77cBmxLBiICfBMog6DiszHz5534toMdde6M5BqjNcPWBO2OBck25aM/JZr35puV9CAzz9TFqlWNzaCn336r8BtRkceMKq4KeXnAW28pN6xjwgSliVyd5Uee+tuvvhoWJimgRCLX7NYX3ngDTq98vepanJedMQOwNMAM9xNPoPDNN4unoTxzzy6Pda+hcZTg5+eHRmLNMsLYJ68ZZnL2rl3awxYYihve34Tf/9EfA1uH49cfdilrtVIE2THt823I35uMd9oLGTvqYM4Kv44I167iGqDWXtu6tHLjU8tZ0MEMinr1VVjt9hoPJJVqErPxcN0phR0q2MdCbeDKEgBwiQzT8PXrB8ftt8O5bVu1LNfiedczz4SNid6ZKah79/pto2QZib/+eqmXSq0d/Pjj+iVyD7ZvhzF1aqkwE899+k+cCFxxhe4aNI4qWrZoXqHLmJtpxbZu1gS5/uH4aPNhbE7IxhOfbQaC/ar+iLmm1WVg+AvLcZ4rF/9tVUuilc5rQqgVbQJ1ZHENEImaCVzWC8mGn5JNLZ23ZcUK2Pv0qRHRqk+BmWtIOqtXV+wqZvo9X65ijo7pFqblescdKqCouuSq3LW9esFGYl282LSmGwKzZikNZm+r2cKcugMGNMz1Pv0UTjEPLN73KYMYG8UzZDAEfx06qXGUe+LICISFhah51/
                KWrIGI0EBsTynEhE83If6JETiQUQCk5lcu5O8NztceyUPr55bitqAC3NXUr2YJBNydwoTG2lVcQzDCuFae27qQbOAp29wMTBKyst94Y80sWpJsUhKMgwcrJsdBg8pvW7ZMka9yC9eUXLt2hZ1uZSF2JkVoMDBVnliVFi+CtTOB/d13N9w1ly4tvpZNCFWt7V23TluwGscM9Ny0bhUjY+LyPYNLrND+p/XEH3tysUYs2M9WxGHaJ1uk+67BYJAfdogd2JWG5lOX4dmmBi6JtFWfaKVaQ4KtGBGhXcU1BFdP1WrJa11a2u+UbvKICBVFaxdi8bgoqwSTv+/cCVcFgRHqYXTsWHrjtGlwDRsGx/LlNSNXOY/99ddN0mFav4YWhBCCcxQUFFuVdqpEcb1tQyIrq4TMOb9M8Q5mCtLQOIZo3qK5vIbh5YiWK3MOZTqRkFWAfY8MQUqBQyVYrxLUKc53lmgW8wMjMa+OR9spS/GSEC0CrNXrhGSfZ5vbKk4xq1ER7LXly7qIUejHREyaBFvr1jBuuEG5iCyVjWY417pqVYUiF2qbR7AhI0NJLzo++aRaQhLFc64MMnroIeBvfzMTIBwNLFwI50cflcqZy3XAaNzA0/bS3v6nnw7MnavfQ43jBjaxZjt26oB1azcUb2MwVO8eHfHh1gxM+XAjOjQKwLPvbTRFJypDbhFandUesy7tjsxCJyZ8JZbvyjjztxHtMW5Aa+QVGpgf448L9xZU3isLT0+IsGBkpLZijzY7a9QV48fDEh0NK6OP3UkGyhEo51mpKFVZnlpGRjDHLLPkXHUVHGKFVptce/YE7r9f1UUlgT9a4BIiJjvw8B7rQjlGyik2NLiWuD7W9Wpo1DOioxohJqYFDsbFw89uV/Ox/sGh6N7UhY8fHoKeLUIROKA58lcn+l4X67Fgh7TBwVs7A8/INxUWihseeBCd3wtA67AALLy8tQwwPxPzeAg69+6DzoEW7CyoIL2dW3xicoyfto40yZ6gGD0all9/he388+HMyyv1IqvIYlqVdDFz7rIijiURM7jpv/+FIyWlyiTq6rthNPKjjypSPiaBPi++CMfWrcXLZuwk13//++hcm/cdF6ffPY3jEl06d0RGRiays3Lg72dFap4LF726Cq+P64EHv41F/uYjppu34h4Bc67oofTAMX2GdCJCxus2YevXc+GXlgZcOhZYvAjo0x/2pQtxfaNQPBVf6DsGVj7OH9vYdUTxMYD2G9QnzjwT+OknleC83PQILS4mPj98uMLDKbXmFGvUWQnBFs+5DhwIO5fGMKCJ1uuxINgdO0wJSnjlyH3/fQq5Hp3rc96X7mINjePRghELtlfP7rD72dGiaRPkMXYmt1DJJ3ZuHFw6AUBZMEesWKt9A8SaXfgnECn9R5PmwA8/we/56cDEe4DlK4HmYs3u3gPEbkez4AoSxcgppjWz4cIo3d1rS/ZkwIgRsHz9NSyXXFJaQ5dSioTXEhffY9cqLNc+fQCqNI0dW3Myi483SZmp6Bjp3L593e71nntUwvniT5dyikww4A0OKji/TCudpHg0Xdmqg3GY0dlMvde6telN0NA4SggLCxWi7Yb0tBQUCHG+OK4Xzu0ejQ2J2SqmoFLzR37P4x8h8s14gqiiGgPP/h/dXubfzOJDL5kM4nMcPnoQ+fnhaCseaKm7em3JnkwYMwbW2bNLjyk95JKfX+M5Ec/6T8o7Fi/FqQnBco6X+Ws7dYLzssvguOYaGN26mYkEaotPPoHj55+L3cQ2LtXxLJ0hsdGivegiU094wAAYDMiia3vhwqP7LIqK1H26ODhh4NlZZymVKGzZot9TjaOCJk2i0aF9O7zw+z488H9/YXFsCt6av0veTaNiFTRuzyrAknT5e+RwIC+35Ldg6UuCAsxBfJaQ9dAhQNt2WJnmKM2xQrCTGlvxXBu/qlPLamiSPeFw222wPfhg+XW0zpqtHFfWq1iM2LDBlHf0q8HKKVqsU6YAPXrA8dprxXPFihiZCu+GG2o3p5mSAtx7rzqXmocleb78svmbWPFgEBbnke66C/jhB2XxUmrRsXu3Sfa8dlVISjKVsZ5/3tRyHjHC1D4mmZPA1683pSWrAgc3s2bByiVGyclwLF4Mx3//C4NJBKh8paFxFGDzC8AFYsFSm/hwTqFyBVfdO1tw96875TuV9z8ivLxMKK1bqkA9fB9inRZ8nuVE8dyN/PR8MxumtPWDzst+4pKsFoatCkIQdiGHUg0VGFht7WOVkYeav1RNqqksIUl55Eg4hFycQrZl19jy3AW08kiKNcXjjyvCIuzBwQAz+PB6o0bBQTf22WebKfOowczf6ar1XJ/R1XQf+wJJk9b1+efDaN4cTqYEpMCE+/yu5ctR+MorKLjpJrj69QNojTM3719/VV1nOYa60B6NY6UvywAtp1O/pxpHBX8b2ALznxmJnk1DTXJ0VPHuBdqBpfvwrS1GvrmHgbTU0r+nyWD3ofuUJfsiE7W7TOuV557fzg
                +PxNh1JHH9wYVapmWoC8kW6HavavhqU1aXP63PrCxzWzUDlJQL9uGHa5dX9oMPYAweXE7AwhM0RW1V+0UXIeBf/zLnKWsCITSXW59YRUOTqN58Ew4KbVBukoQoVjNCQ0uOWbu25G+KYtjtPuvMNHUFdC9TdlKI3LZyJZCaamoiJybCevAg/L/6CgFSd94Lc+U65NrOYcPMpPCVzXfLNS1ecpWqTZjftoo5cg2N+sQFvZpg7IDmuG9kW/kWpH/IKTKDnHxBZfyw4LKX/kLqnffIQFEs2uQk87dUIdgrLgeefBSfpRqYnexU+9/dyIoDXfxwQSPtpKxnFNSWZNX6rVqWqwyN6uG99wyxzAzD5TKMq6825LMynJUUaroY/foZRmFhza/19NPq/I4y5+M2o2VLw3juOcOIi6vdfRQVGcaAAcX1N+x2w2ja1Mjn3yNHGsb+/eWPOXLEMMLCSu6rWzfzPB4cOGAYY8aoc6hzTptmGNnZJb+npBhGQUH58/7vf6XusYDHnneeYeTn+677+vXl27hLF99tnJBgFg2NBsTaAxnGiFmrDFz/tYFLPzMwdo6Ba780MP6r0oW//d9yebXlO7jvfsOw2AzjwksNIyPD+DlTOuO1+cbfdhUaKzNculEbDluk2GvDlXUJOUvVg5tq4sYblZtYzakwR211MH16zeZfGak4cSIcs2eXy+Vqp7uWwT7/+Ic5n/r776Ybl/
                OcNRFzePttONz5atWUkNyPMykJARSjYH19WelMGiBWvGeqSC258ViyjHaWOhTs24eAtm1N1zXdwMQ33wA//2zu72sN8L33wvbHH3DIMTw3z+hYsAB2SjlyDrssYmNVW1i9rHolmOHdxpyjpWW+ebOpykVRDXoTNDQaAP1ah+OPuwZi69hueGfFIbywJgHYnwFkF6psOx5LVi31WbALgen5WP3wMxgw6mzgzGGICwnHziQHNnb2Q+9Qbbk2MDjHVbsp0jpYsr2k6KFTTfHss5VassrCGj68Zud0Og3jppvKnVdZr+PHG8bBg+Z+b71lOK1WtV391qiRYbzySvWuQYtU9nd41VPVVe6nQtCyDQgoXZ9580p+v/120wqOiTGMvXvNbUuWGMbgwaZVumJF5XWaNavUPavz9+9vegzK4s47S+2r6r54sfkbrdnHHy8+R7Hl37u3fl81jipiD2cb7y+PM+6cu80Y9foaA9P+MvDcnwaeX2o0fn6J8cR3O4w8j2NJ975HE9/WlivrQrItpKTptq8hPvusUpJVnfu779bsnDffXI5AnBaLIqFi5OQokiy7nyKb1aurvsZDD5UnqZkzKz/myiuLj1H7d+pU4s4lsbVpYzhYz5UrzW1PPWW4/P0NY/r06t33E0+Ur1PjxqXdzR43d5cuxQOEIo972zN4OP983wOUSy/V76uGhgbxSm25si7uYoaXchZepz2pCTp2rDTazM5gqXPOqf75GOn77rul3KBWf38liKHWqXqwezdc6emlru1ZgoOtWyvP+bpzJ4wZM4qPLdYn9uWW9eCjj+D88svS7lku6/FkA6IbzOGAjUtpmN7vuuuUu9jy229mTt2qwMjoOXPKR09S9KOsa3n9erh27CjeV9WJ+WYPHFBtVLhli+9szFpNSkNDw8Su2h5YF0d+Ebtu3fY1RKdOsEZG+lzGo7Z17w60alW9c33zDZzPPluaYIWkLT/9VJpgGdl8/fU+U+wp4qESU2WYPNlc8uIh2AkTgCefrHj/
                bdvMaF9vUubSHu98tpyXpXgFtZxZV2bSYRRydQiWmD0bjtjYcsuSFDGWncv+6qvisEA1Lzt1qrl+duhQFAjB+oeEwDZxYvl2Yd5gDQ0NDSC2tgdaDMOoy4Wfl/KIbv8agutX//ij3AhHkRGJR0ihSjCAqVs3OJOTSy3RsX3xhRko5G3xkcR27VLBV87t20sRk5Vkt3dvxcS+ebOplkTXB8/fpYupOuWRiSwLsZZVgnkhr+KkAVRaWr68fOq7PXtgUIWKLpU//6w+wUqdaHk7y2Q8UvVbtMhUdfKAWYK6dlXLfZSwx4UXmmtvL7sMBampCOD9iMXNADCjZUt4vgcu97FwiU+HDvX77LkkiW0hAwQlrsFMQg0F5hJescL0HjD1IYPvNCpERr4Db/x5AIVOF+4c3gZRof74cFU8UrjMRnDjoJZYeSAd3ZuHoU2jQGw4lIUgPyt+iU2B1WpBkcOFTk2C0SoiEL/KNv42qnOU7G8uZ/t2QxLW70/
                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
                vmqxkdoOUBjkxuhxDiwouFF2jfEpDi7HiT2cg4FtI4oDfBxOQ0XxBruXxFBJKT3XoeY6qfZEZOY5kJpbhIhAGxqFmNsOZxYiOtRPBUJtSshWy2/6tzaXnGUXOBAaYM7nM+o30M+qzsE1txb5vKPD/FSAml2O5fEMtOLfrMeR7CL4yW8tIktkB3gtBh9xTS3nY3MLncX1pRqUU+7BX67B9bO8rqf7oGLUnpRcDGoXqaKE1ZjsSC7S5F4Gu9fncslRkPtc+SpYyqbmkgP9SsdU8DqFUs+gMu0UKu0U7dVOmVIH8klj2cY6xiblIFu2DWgTcSK+MlR36iOlzmob9UmyfDPWM6RHf9InMKhT/OSTqiOwsNNm4gBa1CSaMopRGhonRG8p5PL3OVvRqVmIUkD64Ibeas3qq4v247ttyZg/cYCQnIFRb6zB2TFh2Cr7D28XgfvP7YBz31iLoXLcpuRcXNqjCW4e2goDZdtvN/bBl2sS8OPOVPgL+fWXfR46rwMs/12MuWO64Mp
                +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
                55PUbVktQ4aOA5GPDDeyOYW5XkzvPSOuZyIE9yc1qSniQM3I8uaQYpceBDDWBvN3dZ0LVNYo6JKe3SpXuebmNej8RJ9zWDs9geJEK2Ka/P7WxTBndxG4+hN4DBaXw2bGe2GwmU78fQoSYBe67DZ8R3gc+BwVae58BBjWfQ4nnuGg2K3EIXHly4D9PHdFbyiTMX7cfFvZviKSHL9DwnLurZBOviMrFwfwYePa8DXv3rIFpFBGLtwUy17pUKSl9sOKyEKvZm5OPeX/fhoaGtsOpAJjYkZOPMjo3UdX4TAt59JA//vbwLPl2ToBScmoaVDALnrk9UkcdXdotWQhUevP9XHCID7Xjk/A6YJQQ/XM4XEmA/lR8ZF/1zdLyvoS9Un9rF1QG1IO/Rn6SGhsbJhOwCJ/72+RZ8N6GPUnW68YONeOi89li+Kx0peUWYNLoD1sdn4RMuvbmoMx4Vq/fGgS3xmfz7wm6NMapLY/y8JVmIOAMdmofi9x0pOK9DI0SFB2DDoUzcO7Kd28o9gleWHcJH1/VWkcgUivC3lczVPyZWcqfGwabjakjJyoU3Fx/A+sPZeOnK7moJEC1g2wkmw1SPYLCGjMKx/Ghc7GhP2Nwr5RX9SWpoaJxMoLrTb8m5uP+rbbj63Q24+rTm2HJILNAujdA+KggbD2YgItAP83al4vFvtuO7velKMMJW5EKYe11umL8VmflO5AhhU/pxi5Ais93YvQLezu3eBINjwnDW66sxTaxkL35VGsz851X95dpi/XrjxmGt4Cc7D5m1Cu8tizuVCTZVyuVHi2CJY+EvuBtm+qCH9aepoaFxMsDlBPoG+2Fsn2Zo1ShICf2fM3stvolNxg4hv5t7NsGFvZvhiq6N8cKlXdH5j/34ZOUhWAKsxckC8h0uhPiZUo7RIf7wbxaKxXtS0adFyVTOkawC/Ov8jrhrRFvc8dkWzNtwGGP7mekTN8Rl4bkNSTgilvS7Ygk/U+RUAhzKdMtx4H9ju6sUeNd8uBG9W4ap9HmnGBKkjD2aBHssLFkPHnGTrA5209DQOPFJVoiRhHZmpyhFsAnpBQgVa/ElIdQvru6J7YdzhegKYbgD5DMKHOCfXaJDsGKvudRs+b50dGkWgiKnoSzY0d2jMWNLkiJfDyioMe3XvUqecWjrcBSJJcx8t7R+F+9MwdwxnfD4Oe0xsXNjLNuVpvK8UrDilcX78OW6RDSPCFB6w3lCwIlC2Pz/KYItUs452gR7LEmWYFq8q2GqQ2loaGicsKBHt3NkoIr+JXYmZWN0x0ZoJ4Tbu1UY2kcFKkL7aX86rnt/I2KT8/C3gS1xZd+m+OtAJm59b4Mck4sxvZsiyG5V2W6o4HRlTIRKSuDB2NOaYdHedNzy/gasScjGxX2b4Z1V8fg5NgU2sYIv7NUEbRoF4rLeTZCQWYB5W5Px/dYU3DKkNWYui8MtH2xUuslUq5r6
                +36VNu8UwI9Szpay7Zi8G0c58MkXesLM3TdYf6oaGhonKryDkBxCtjZrSUo7z1Kb7EInCsUypayhB/xtmxBmj5ZhKjuOZ1/PvGnZICUS+W4hx26yP7dSS1glGrBAkbMHrINL7WGo7Vn5DpW6rps7ew8TFQRIfa0n7/wsG3KKlCfobDhmA7DjgGQJKg5MlnI/Ks66pKGhoaGhUR1QSeefaADB/5rieJGDYSDUg1IugJnPT0NDQ0NDozZ4TcrQ44FgjydL1htMjfGAu0Tq90VDQ0NDoxpYKuVJKQuPp0odjyTrQQe3dXsTTHeyhoaGhoZGWVD8+wUpH0k57sKlj2eS9aCHlIlSqG/XWL9PGhoaGhqCVVJel/KplLzjtZInAsl60MpNtOOlnKbfLw0NDY1TDhkw51rfl/IzjmHU8MlIsh5QpeoMKUysykApLgHS+bw0NDQ0Tk6kS1kp5WuYa14PnEiVPxFJtizhkmSHw4wm6yeFKVVC9HupoaGhccKBlilz++2A6Q7+U8oKmLnJT0ic6CRbFlzhzbxjHWEGTnVw/ztaCoU6g6Qw/5Nei6uhoaFx7Ii0QEomzIw4JNX9UvbCXN/KxLonjRLg/wswAFg9AI270U3EAAAAAElFTkSuQmCC`,
                width: 150
                },
                {
                  rowSpan: 2,
                  text: [{text: '\nGESTION DEL TALENTO HUMANO', bold: true, alignment: 'center'}]
                },
                {
                  text: [
                    { text: 'Código: ', bold: true },
                    { text: 'FR-GTH-38' }
                  ]
                }
              ],
              ['', '', {
                text: [
                  { text: 'Version: ', bold: true },
                  { text: '01' }
                ]
              }],
              ['', { rowSpan: 2, text: [{text: 'AUTORIZACIÓN DE DESCUENTO POR NÓMINA', bold: true, alignment: 'center'}] }, {
                text: [
                  { text: 'Fechas: ', bold: true },
                  { text: '28/11/2022' }
                ]
              }],
              ['', '', {
                text: [
                  { text: 'Páginas: ', bold: true },
                  { text: '1 de 1' }
                ]
              }]

            ],
          },
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //Tabla fecha

        {
          style: 'tableExample',
          color: '#444',
          table: {
            alignment: 'left',
            widths: [22, 22, 50],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'FECHA\nDD/MM/AAAA',
                  style: 'tableHeader',
                  colSpan: 3,
                  alignment: 'center',
                  bold: true,
                },
                {},
                {},
              ],
              [
                { text: '29', style: 'tableHeader', alignment: 'center' },
                { text: '08', style: 'tableHeader', alignment: 'center' },
                { text: '2022', style: 'tableHeader', alignment: 'center' },
              ],
            ],
          },
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //contenido

        //parrafo 1
        {
          text: [
            'Yo ',
            {
              text: '____________________________________________________________',
            },
            ', Identificado con cédula de ciudadanía No.',
            { text: '_________________' },
            ', autorizo de manera expresa e irrevocable al ',
            {
              text: 'CENTRO DE CUIDADOS CARDIONEUROVASCULARES PABÓN S.A.S. y/o CLINICA CARDIONEUROVASCULAR PABON S.A.S,',
              bold: true,
            },
            ', para descontar de mi salario, el valor correspondiente a $',
            { text: '__________________' },
            ', por concepto de: ',
            { text: '________________________________' },
            ', que a la fecha adeudo.\n\n\n',
          ],
        },
        //parrafo 2
        {
          text: [
            'Igualmente autorizo de manera expresa e irrevocable al ',
            {
              text: 'CENTRO DE CUIDADOS CARDIONEUROVASCULARES PABÓN S.A.S. y/o CLINICA CARDIONEUROVASCULAR PABON S.A.S,',
              bold: true,
            },
            'para que la suma anteriormente descrita se descuente a partir de mi salario correxpondiente a la proxima nomina del año en curso y en cuotas iguales mensuales así.',
          ],
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //tabla 2

        {
          style: 'tableExample',
          color: '#444',
          table: {
            alignment: 'left',
            widths: [80, 80],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'NUMERO DE CUOTAS',
                  bold: true,
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
              ],
              [
                { text: '1', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '2', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '3', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '4', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '5', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '6', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
            ],
          },
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //Firma

        {
          text: [
            'Atentamente,\n\n\n',
            { text: '____________________________________\n' },
            { text: 'CC. No ' },
            { text: '10025546845' },
          ],
        },
      ],
    };
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  constructor() { }

}
