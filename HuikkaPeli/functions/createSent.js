export const createSent = () => {

    const list = [
        "Ripuli on märkää kakkaa",
        "Kalja on pahaa :D ",
        "Jos on perse auki, on paras pitää turpa kiinni.",
        "Tuuppas kalle, kustaan ikkunan alle.",
        "Ripuli on kosteaa",
        "Turha on rypistellä pyllyvää ku paskat on jo housussa.",
        "Miehet ovat kuin parkkipaikkoja,kaikki hyvät varattu ja loput invoja.",
        "Pillu on kuin sahara :D:D:D:D:D:D",
       " Lähti kun Taisto työkkäristä",
"- Naama, kuin petolinnun perse pahimpaan syysripuliaikaan.",
"- Eihän tuolla naamalla voi muuta tehdä, kuin kusta muuntajaan.",
"- Tuota ei nussis suksisauvallakaan.",
"- Hauskaa on, kuin anopin hautajaisissa.",
"- Parempi, kuin uusi venäläinen.",
"- Lähti, kuin lehmä suosta.",
"- Lähti, kuin kuppa Töölöstä.",
"- Kylymä ko Ryssän helevetissä.",
"- Kylymä ko eskimon pillussa.",
"- Niin kiero mies että pipokin pitää ruuvata päähän.",
"- Niin kiero, että syö rautanaulan ja paskantaa ruuvin.",
"- Niin kiero mies että pitää ruuvata hautaan.",
"- Kiero ku torspon lapa.",
"- Kiero mies kuin karjun kyrpä.",
"- Pyörii, kuin hullun mulkku mielettömän perseessä.",
"- Pyörii kuin ryssä Anttilassa.",
"- Hävis ku pieru saharaan.",
"- Pyörii kuin pieru molskihousuissa.",
"- Silmät kuin kaksi kipeää sianvittua",
"- Silmät kuin kaksi kusenreikää hangessa.",
"- Silmät on kuin Skodan jarrupalat.",
"- Silmät kuin kaksi viikon vanhaa puukon pistoa.",
"- Kiertää kuin pappi bordellia.",
"- Kalpea kuin homo HIV - testissä.",
"- Lähti liukkaasti kuin talonmies jäiseltä peltikatolta.",
"- Tyhjä kuin Jeesuksen hauta pääsiäisaamuna.",
"- Pimeää kuin tontun perseessä.",
"- Jätkä on kuin pystyyn paskannettu lapamato.",
"- Jätkä on kuin pakkasennussima kukkakeppi.",
"- Kiire kuin mummolla bussiin.",
"- Kyttää kuin mykkä pillua.",
"- Kuin juosten kustu.",
"- Levisi kuin paska tuulettimeen.",
"- Ulkona kuin tampaxin lanka.",
"- Tarkkaa hommaa, kuin puuhevosen perseenreijän poraus.",
"- Sopii kuin isä äitiin.",
"- Vituttaa niin ettei veri kierrä.",
"- Vituttaa ku pientä eläintä.",
"- Vituttaa kuin pientä oravaa, kun käpy jääty.",
"- Rahaa on kuin rosvopäälliköllä. - Ei yhtä paljon, mutta samalla tavalla - hankittu.",
"- Rahaa on kuin rosvopäälliköllä. - joka on just ryöstetty.",
"- Hiljaa kuin mykkä paskalla.",
"- Auttaa kuin housuun kuseminen pakkasella.",
"- Olo on kuin omenalla: Punaiset posket ja sisus siemeniä täynnä.",
"- Niin tyhmä, että pitäis nussia uudestaan.",
"- Niin tyhmä, että ois pitänyt aikoinaan roiskia seinille.",
"- Lapsihan on ihan isänsä näköinen; yhtä pienet munat.",
"- Lapsihan on ihan isänsä näköinen; mutta pääasia että on terve.",
"- Upposi niinkuin vanhaan naiseen.",
"- Seisoo kuin kikkeli häissä.",
"- Mies on kuin pystyynkuivunut runkkupuku.",
"- Kieli on kuiva kuin beduiinin sandaali.",
"- Jäi kun tikku paskaan.",
"- Putos ku eno veneestä.",
"- Imu on kuin seitsentoistakesäisessä.",
"- Sopii kuin otsatukka sialle.",
"- Hauskaa kuin raastinraudalla runkkaaminen.",
"- Polkee kuin tulpatonta mopoa.",
"- Kusta tulee niinkuin olis osia pois.",
"- Varmuuden vuoksi, niin kuin nunnalla nännit.",
"- Huutaa, kuin mummo uunissa.",
"- Tarpeeton, kuin paavin pallit.",
"- Ajaa yhtä hitaasti kuin vanhat ihmiset nussii.",
"- Ruma, kuin venäläisen pommikoneen rahastaja.",
"- Seksikäs kuin maksalaatikko.",
"- Imee pahemmin kuin lauma villejä pölynimureita.",
"- Kusee pahemmin kuin joukkue alokkaita marssitauolla.",
"- Kiiltää kuin juutalaisen munat.",
"- Tyhmä kuin osuuskaupan kassa.",
"- Tarkkaa hommaa, kuin kirpun nainti: Milli pieleen ja se on silmässä.",
"- Kuollut kuin vuoden vanha hevosenpaska.",
"- Yhtä kuollut kuin minun seksielämä.",
"- Mukava kuin kuminen muna.",
"- Käsi heiluu kuin turkkilaisella vitun suolaajalla.",
"- Vettä tulee kuin aisaa Esterin perseestä.",
"- Mukava kuin lehemän mulukku",
"- Istuu ku paska Junttilan tuvan seinässä",
"- Puhua porisee kuin ruuna veteen paskantaisi.",
"- Vinossa kuin nilikun vittu.",
"- Huutaa, kuin mummo uunissa.",
"- Seksikäs kuin maksalaatikko.",
"- Kiiltää kuin juutalaisen munat.",
"- Kylmää kuin jääkarhun perseessä",
"- Mutkittelee kuin käärmeen kusi erämaassa",
"- Hiljaista kuin ruotsalaisessa iltakirkossa",
"- Haihtuu kuin Aperita aivoista",
"- Sopii kuin sutarin sormi sian perseeseen",
"- Levisi kuin kaljalasti osuuskaupan rappusille",
"- Nälkä kuin viron sudella",
"- Tuulee kuin venäläisissä elokuvissa",
"- Kusettaa kuin palokunnan hevosta",
"- Toimii kuin junan vessa",
"- Kiire kuin mummolla bussiin",
"- Lähtee kuin NATOn ohjus",
"- Kiihtyy kuin Kemiläisen nälkä",
"- Kyllästynyt kuin pasifistin pistooli",
"- Sekaisin kuin termiitti puujojossa",
"- Nenä vuotaa kuin sulhaspojan mulkku",
"- Korvat pois ja lisää suonia niin mies on täysi kokovartalokyrpä",
"- Kurkku on kuiva kuin naapurin kaivo",
"- Kevyt kuin poliitikon lupaus",
"- Ajaa kuin pulloperse sika.",
"- Apea kuin kissa paskalla.",
"- Istuu tärkeänä kuin kissa paskalla.",
"- Tarpeeton, kuin meidän äidin kännykkä.",
"- Tarpeeton, kuin nunnan nännit.",
"- Terve kuin pukki.",
"- Tietää yhtä paljon kuin sika satelliiteista..",
"- Tippui kuin torakka.",
"- Tuijottaa kuin sonni uutta lankkuaitaa.",
"- Tukee ja vahvistaa kuin kyrpä vanhaa ihmistä..",
"- Tukka kuin viidakko - ei yhtä tiheä mutta yhtä eläinrikas.",
"- Tupakoi kuin turkkilainen.",
"- Heiluu kuin hullun mulkku tuulessa.",
"- Punainen, kuin sian vi**u pakkasella.",
"- Tavara on kuin hirvellä, ei yhtä iso, mutta yhtä korkealla (pitkästä naisesta).",
"- Toimii kuin junan vessa.",
"- Silmät kuin sian vitut",
"- Mies kuin muna eikä mene lääkäriin",
"- Istuu kuin mykkä paskalla",
"- Silmät kuin tähdet, ei yhtä kirkkaat mutta yhtä kaukana toisistaan",
"- Piipittää kuin Sputnik.",
"- Pyörii kuin hullu mulkku mielettömän perseessä.",
"- Pyörii kuin puolukka pillussa.",
"- Pihalla kuin tamppoonin naru",
"- Sopiii kuin sialle otsatukka",
"- Kattoo ku halpaa makkaraa, itse on kuin tarjouslenkki....",
"- Lähti kuin kuppa Töölöstä!",
"- Uppoo kuin vanhaan ihmiseen.",
"- Sekaisin kuin undulaatti betonimyllyssä",
"- Pihalla kuin lintulauta",
"- Lähtee kuin nappi housuista",
"- Lähtee kuin astmanen lehmä makuultaan",
"- Krapulan parantaminen viinalla on yhtä tarkkaa hommaa kuin ripulin parantaminen piereskelemällä",
"- Ulkona kuin tupakkapaikka.",
"- Tarkkaa hommaa kuin sonnan ajo ilman perälautaa",
"- Tuijottaa kuin härkä uutta porttia",
"- Haisee kuin ajokoiran perse",
"- Varmuuden vuoksi, niinkuin vanhanpiian tissit",
"- Tehän olette kuin kaksi marjaa; paskanmarja ja rusina",
"- Lähtee kuin purkka tukasta",
"- Perse kuin pienoiskivärinlukko",
"- V**tu kuin hirvellä ei niin iso vaan yhtä korkeella",
"- Pyörii kuin porakone",
"- Reikä se on rinkelilläkin!",
"- Vituttaa ku hampaatonta pikkuoravaa pakkasella ku kävyt on jäässä",
"- Vituttaa kuin liito-oravaa hakkuuaukion reunassa.",
    ]

    const randSent = list[Math.floor(Math.random() * list.length)]

    return randSent;
}