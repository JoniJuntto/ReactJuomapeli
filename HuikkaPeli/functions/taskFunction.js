export const createTask = () => {

    const list = [
        " ota huikkaa",
        " antaa 5 huikkaa",
        " ottaa 5 huikkaa",
        " on hiljaa 3 minuuttia",
        " tekee 5 punnerrusta tai ottaa 5 huikkaa",
        " lähtee laulamaan laulua, se joka viimeisenä liittyy mukaan, juo 7 huikkaa",
        " ei saa puhua Suomea 5 minuuttiin",
        " ei saa koskea kasvoihin/hiuksiin, tai joka kerta ottaa 5 huikkaa",
        "n kysymyksiin ei saa vastata, jos vastaa, ottaa 4 huikkaa",
        " ottaa POHJANMAAN KAUTTA",
        " aloittaa pokemon-hahmolla. Se joka toistaa jo sanotun tai ei keksi uutta, juo 8 huikkaa",
        " aloittaa vesiputouksen",
        " ei saa sanoa sanaa juoda missään muodossa tai juo 5 huikkaa",
        " jos olet selvempi kuin yksikään muista pelaajista, juo 5 huikkaa ",
        " aloittaa automerkillä, se joka toistaa jo sanotun tai ei keksi uutta juo 7 huikkaa",
        " ,ketä on mielestäsi todennäköisin oksentaja tänä iltana, hän juo lasin vettä",
        " laita soimaan Bob Marleyn Jamming, sinä ja valitsemasi pelaaja, juotte joka kerta kun laulussa sanotaan jamming, vain ensimmäisen kertosäkeistön loppuun asti",
        " sano sana joka on tästälähtien kiellossa, ne jotka sanovat sanan juovat 5 huikkaa",
        " juo yhtä monta huikkaa kun olet juonut juomia tämän illan aikana",
        " valitse kaksi osallistujaa joiden on imitoitava haluamaasi eläintä",
        " aina kun sanot jotain sinun on hyväiltävä rintojasi",
        " jaa 5 huikkaa pelaajalle joka on juonut vähemmän kuin sinä, jos se ei ole mahdollista juo 10 huikkaa",
        " kerro asioita mitä et halua esimiehesi tietävän että olet tehnyt töissä... jokaisesta asiasta 2 huikkaa",
        " aloittaa kategoriana leijonakuninkaan hahmot",
        " aloittaa, kategoriana nimityksiä penikselle",
        " aloittaa, kategoriana nimityksiä tisseille",
        " jaa 5 huikkaa pelaajalle joka on pienempi kuin sinä",
        " ota suu täyteen juomaa ja sano jotain, se joka arvaa oikein jakaa 5 huikaa",
        " juo 5 huikkaa jos olet pöllinyt jonkun polkupyörän",
        " juot seuraavan tehtävän huikat tuplana, vaikka et muuten joutuisi juomaan",
        " saa päättää säännön",
        " saa päättää säännön, edelliset säännöt perutaan, jos sellaisia on voimassa",
        " kumpi mielummin, kyky lentää vai lukea ajatuksia. Jos enemmistö on puolellasi jaa 5 huikkaa, jos olet outolintu juo 5",
        " arvaa muista pelaajista onko hän opiskelija vai töissä, jokaisesta oikein menneestä arvauksesta saat jakaa 2 huikkaa, jokaisesta väärästä arvauksesta juot 3",
        " hymyile taukoamatta minuutin ajan, jos hymy häviää huulilta, juo 5 huikkaa",
        " juo yhtä monta huikkaa kun huoneessa on huonekaluja",
        " juo yhtä monta huikkaa kun sinulla exiä",
        " jaa niin monta huikkaa kun olet ollut vuosia työelämässä",
        " marry, f*ck, kill... Päätä kanssaosallistujista",
        " aloittaa, sanokaa järjestyksessä Hei! eri kielillä, se joka ei keksi tai sanoo saman juo 5 huikkaa",
        " valitse joku sana, se joka ensimmäisenä laulaa laulun, jossa mainittu sana esiintyy, jakaa 10 huikkaa",
        " saat päättää kumotaanko kaikki säännöt vai ei. Jos siis sääntöjä on jo olemassa",
        " olet diktaattori, saat haastaa muut juomaan kanssasi yhtä monta huikkaa milloin vain. Edellinen diktaattori astuu syrjään",
        " olet kysymysmestari, MIHINKÄÄN kysymyksiisi ei saa vastata. Edellinen kysymysmestari poistuu",
        " jaa 5 huikkaa mielestäsi fiksuimmalle",
        " jaa lasi vettä mielestäsi eniten päihtyneelle",
        " saat immuniteetin, joka alkaa nyt. Immuniteetin aikana ei tarvitse juoda ja voit jakaa saamasi huikat toisille. Tämä kestää 3 tehtävän verran",
        " ota 4 huikkaa jos olet leikannut varpaankyntesi tällä viikolla",
        " jaa yhtä monta huikkaa kun sinulla on setiä tai enoja",
        " ota 4 huikkaa jos olet joskus oksentanut jonkun päälle, jos et jaa 5 huikkaa",
        " aloittaa, suomalaisia Twitch-striimaajia",
        " aloittaa, sanoja jotka tarkoittavat lunta sen eri muodoissa",
        " ota yhtä monta huikkaa kun sinun pöydällä tölkkejä",
        " jos voit nuolaista itseäsi nenään jaa 5huikkaa, jos et ota 4",
        " jos voit koskettaa kyynärpäilläsi toisiaan jaa 1 huikka, jos et ota 5",
        " salmiakki, vai suklaa. Jos enemmistö on puolellasi jaa 5 huikkaa, jos olet outolintu juo 5",
        " koirat vai kissat. Jos enemmistö on puolellasi jaa 5 huikkaa, jos olet outolintu juo 5",
        " ,kuka osallistujista on nuorin, jos vastaat oikein jaa 5 huikkaa, jos väärin ota 5 huikkaa",
        ", Moi! t. Huikka! juo 4 huikkaa, koska miksi ei?",
        " istahda maahan ja juo lasisi tyhjäksi, jonka jälkeen saat nousta",
        " jos olet värjännyt joskus hiuksesi ota 5 huikkaa",
        " aloittaa, rohkelikon velhoja Harry Potterissa, se joka ei muista tai toistaa jo sanotun ottaa 5 huikkaa",
        " valitse joku sana joka on tästä lähtien kielletty, muut kielletyt sanat jäävät voimaan",
        " jaa 4 huikkaa henkilölle jonka tunnet huonoimmin",
        " jaa 4 huikkaa henkilölle jonka tunnet parhaiten",
        " jaa niin monta huikkaa kun muistat paikalla olevien etunimiä",
        " jaa niin monta huikkaa kun muistat paikalla olevien sukunimiä",
        " jaa 4 huikkaa pelaajalle, joka on sinua vanhempi",
        " jaa 4 huikkaa pelaajalle joka on sinua nuorempi",
        " sano kuka on porukan pahin stereotyyppinen nörtti, hän juo 4 huikkaa",
        " sano asia jota et ole ikinä tehnyt, ne jotka ovat sen tehneet, juovat 5 huikkaa",
        " kumpi mielummin elokuva ilman ääntä vai ilman kuvaa. Jos enemmistö on kanssasi samaa mieltä jaa 5 huikkaa, jos ei ota 4",
        " aloittaa tarinan",
        " ,jos poltat ota 5 huikkaa, jos et jaa 5 huikaa",
        " aloittaa, valitkaa järjestyksessä kenen joutuu ottaa huikkaa, jokaiselle valitulle 3 huikkaa",
        " juo 4 huikkaa jos olet väärentänyt nimikirjoituksen",
        " juo niin monta huikkaa kun pelissä on alfa-maleja",
        " arvaa kuka on viimeksi käynyt suihkussa, jos osut oikeaan jaa 5 huikkaa jos arvaat väärin ota 5 huikkaa",
        " aloittaa, paljon autosi maksaa, se jolla ei ole autoa ottaa 3 huikaa, se jonka auto maksaa eniten, ottaa 5 huikkaa",
        " laita joku kuvailemaan juomaansa ruotsiksi",
        " laita joku kuvailemaan juomaansa englanniksi",
        " laita joku kuvailemaan sinua ruotsiksi",
        " laita joku kuvailemaan sinua viroksi",
        " matki jotain osallistujaa, se joka arvaa osallistujan oikein saa jakaa 5 huikkaa",
        " matki jotain eläintä, se joka arvaa eläimen ensimmäiseksi, jakaa 4 huikkaa",
        " juo yhtä monta huikkaa kuin vierailemiesi maiden määrä",
        " juo 4 huikkaa jos olet joskus piirtänyt pulpettiin",
        " jos sinulla on jotain ainetta hiuksissasi, juo 4 huikkaa",
        " juo 3 huikkaa jos et tiedä mikä on granola, jos tiedät kerro muillekin",
        " juo 3 huikkaa jos et tiedä mikä on joustokaukalo, jos tiedät kerro muillekin",
        " juo niin monta huikkaa kun pelissä on hyvännäköisiä ihmisiä",
        " valitse kenellä on kaunein ääni, hän juo 3 huikkaa",
        " aloittaa kierroksen never have I ever...",
        " juo 4 huikkaa jos pidät kaikista pelaajista",
        " jaa 4 huikkaa sellaiselle joka on käynyt vessassa pelin alkamisen jälkeen",
        " aloittaa, kategoriana kiinnostavat mediapersoonat",
        " aloittaa, kategoriana Pokemon pelit",
        " aloittaa, jokainen lukee ääneen viimeisimmän kalenterimerkinnän puhelimesta",
        " kerro mitä jokainen pelaaja juo, jokaisesta väärästä arvauksesta 2 huikkaa, jos arvaat oikein, henkilön joutuu juoda 5 huikaa",
        " kerro kustakin pelaajasta jokin hyvä piirre ja ota huikkaa jokaisen jälkeen"
    ]

    const randTask = list[Math.floor(Math.random() * list.length)]

    return randTask;
}