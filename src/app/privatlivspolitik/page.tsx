import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privatlivspolitik — Nordstens Workspace",
  description: "Læs om hvordan Nordstens Workspace behandler dine personoplysninger.",
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl">
          <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4">Juridisk</p>
          <h1 className="text-3xl sm:text-4xl font-light text-[#8397a9]">Privatlivspolitik</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl space-y-10 text-sm text-[#6b6b7a] leading-relaxed">

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">Privatlivspolitik for Nordstens Workspace</h2>
            <p className="text-xs text-[#9d2e1e] mb-4">Senest opdateret: 10. november 2026</p>
            <p>
              Nordstens Workspace tilbyder kontorudlejning, coworking-faciliteter, mødelokaler og virtuelle adresser. I den forbindelse behandler vi personoplysninger om kunder, brugere, kontaktpersoner, samarbejdspartnere og besøgende.
            </p>
            <p className="mt-3">
              Denne privatlivspolitik beskriver, hvordan vi behandler dine personoplysninger, herunder i forbindelse med vores hjemmeside på www.nordstens.dk og vores intranet på nordstens.app.
            </p>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">1. Dataansvarlig og kontaktoplysninger</h2>
            <p><strong className="text-[#8397a9]">P/S Nordstens Hus</strong></p>
            <p>CVR-nr.: 36559888</p>
            <p>Slotsgade 67B, 3400 Hillerød</p>
            <p>Telefon: <a href="tel:+4582303234" className="text-[#9d2e1e] hover:underline">82 30 32 34</a></p>
            <p>Mail: <a href="mailto:info@nordstens.dk" className="text-[#9d2e1e] hover:underline">info@nordstens.dk</a></p>
            <p className="mt-3">P/S Nordstens Hus er dataansvarlig for de behandlingsaktiviteter, der er beskrevet i denne privatlivspolitik.</p>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-6">2. Vores behandlingsaktiviteter</h2>
            <p className="mb-6">Vi behandler personoplysninger til følgende formål:</p>

            <div className="space-y-8">

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.1. Kontakt og kundehenvendelser</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At besvare henvendelser fra potentielle og eksisterende kunder samt samarbejdspartnere, udarbejde tilbud og administrere den indledende kundedialog.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> Navn, e-mailadresse, telefonnummer, eventuelt firmanavn og stillingsbetegnelse samt oplysninger i henvendelsen.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til at besvare henvendelser og administrere vores forretningsmæssige relationer. Opfyldelse af kontrakt eller foranstaltninger forud for aftaleindgåelse, jf. GDPR artikel 6, stk. 1, litra b, når behandlingen er nødvendig i forbindelse med en aftale med dig som fysisk person.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Oplysninger slettes som udgangspunkt senest 6 måneder efter seneste relevante kontakt, medmindre der etableres et kundeforhold eller foreligger et konkret behov for længere opbevaring.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.2. Booking, serviceaftaler og kundeadministration</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At oprette og administrere aftaler om kontorudlejning, coworking-pladser, mødelokaler, virtuelle adresser og øvrige serviceydelser, herunder bookinger, fakturering og kundekontakt.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> Navn, adresse, e-mailadresse, telefonnummer, firmanavn, stillingsbetegnelse, booking- og aftaleoplysninger samt relevante betalings- og faktureringsoplysninger.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Opfyldelse af kontrakt, jf. GDPR artikel 6, stk. 1, litra b, når behandlingen er nødvendig for en aftale med dig som fysisk person. Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til administration af erhvervskundeforhold og kontaktpersoner. Retlig forpligtelse, jf. GDPR artikel 6, stk. 1, litra c, herunder overholdelse af bogføringslovgivningen.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Oplysninger opbevares, så længe kundeforholdet består, og derefter så længe det er nødvendigt for at dokumentere aftaleforholdet eller håndtere eventuelle retskrav. Regnskabsmateriale opbevares i 5 år fra udgangen af det regnskabsår, som materialet vedrører, jf. bogføringsloven. Øvrige oplysninger slettes, når de ikke længere er nødvendige.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.3. Videoovervågning</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At forebygge og opklare kriminalitet, håndtere sikkerhedshændelser samt beskytte personer, faciliteter og ejendom.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> Billedoptagelser uden lyd samt oplysninger om tidspunkt og sted for optagelsen.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til at forebygge kriminalitet og beskytte personer og ejendom. Overvågningen sker under iagttagelse af tv-overvågningsloven.</p>
                  <p><span className="font-medium text-[#8397a9]">Modtagere:</span> Optagelser kan videregives til politiet eller andre modtagere, når der foreligger et særskilt lovligt grundlag.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Optagelser slettes senest 30 dage efter optagelsen og tidligere, hvis fortsat opbevaring ikke er nødvendig. Optagelser kan opbevares længere, når lovgivningen giver mulighed herfor, eksempelvis i forbindelse med en konkret tvist eller politianmeldelse.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.4. Hjemmeside og cookies</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At sikre hjemmesidens funktionalitet og sikkerhed samt analysere og forbedre brugeroplevelsen. Vi kan desuden anvende cookies til markedsføring.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> IP-adresse, cookieidentifikatorer, oplysninger om browser og enhed, besøgstidspunkt og eventuelle oplysninger om brugeradfærd.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til nødvendig teknisk drift og sikkerhed. Samtykke, jf. GDPR artikel 6, stk. 1, litra a, til behandling af personoplysninger gennem samtykkekrævende cookies og lignende teknologier. Teknisk nødvendige cookies kan anvendes uden samtykke efter cookiebekendtgørelsen. Øvrige cookies, der kræver samtykke, anvendes først efter dit samtykke.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Afhænger af de konkrete cookies og teknologier. Oplysninger om formål, udbydere og opbevaringsperioder fremgår af hjemmesidens cookieinformation. Du kan til enhver tid ændre eller trække dit cookiesamtykke tilbage via hjemmesidens cookieindstillinger.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.5. Nyhedsbreve og markedsføring</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At udsende nyhedsbreve, opdateringer, invitationer og relevante tilbud til personer, der har tilmeldt sig vores elektroniske markedsføring. Vi kan desuden anvende oplysninger om dine kommunikationspræferencer til at tilpasse indholdet. Individuel måling af åbninger og klik anvendes kun, når der foreligger det nødvendige samtykke.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> Navn, e-mailadresse, eventuelt firmanavn, tilmeldings- og samtykkeoplysninger samt kommunikationspræferencer. Ved særskilt samtykke kan vi desuden behandle oplysninger om åbninger, klik og tilknyttede tekniske data.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Samtykke, jf. GDPR artikel 6, stk. 1, litra a, til udsendelse af nyhedsbreve og elektronisk markedsføring. Samtykke, jf. GDPR artikel 6, stk. 1, litra a, til eventuel individuel sporing af åbninger og klik. Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til administration af afmeldinger og dokumentation for lovlig markedsføring, i det omfang behandlingen er nødvendig.</p>
                  <p><span className="font-medium text-[#8397a9]">Modtagere:</span> Vi anvender en amerikansk leverandør af nyhedsbrevs- og markedsføringsløsninger, som behandler oplysninger på vores vegne.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Oplysninger opbevares, så længe du er tilmeldt. Ved afmelding ophører udsendelserne, og oplysninger, der ikke længere er nødvendige, slettes. Dokumentation for tidligere samtykke kan opbevares i op til 2 år efter seneste anvendelse af samtykket, når det er nødvendigt for at dokumentere lovligheden af tidligere markedsføring. Du kan til enhver tid framelde dig via linket i vores nyhedsbreve eller ved at kontakte os.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.6. Kundetilfredshedsundersøgelser</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At undersøge kundernes tilfredshed, identificere forbedringsmuligheder og udvikle vores faciliteter og serviceydelser. Vi kan desuden anmode om personlige anbefalinger eller udtalelser til brug i vores markedsføring.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> Navn, e-mailadresse, eventuelt firmanavn, tilfredshedsvurderinger, kommentarer og øvrige oplysninger, som du afgiver i undersøgelsen. Hvis du giver særskilt samtykke til offentliggørelse af en personlig anbefaling, kan vi desuden behandle og offentliggøre dit navn, firmanavn, stillingsbetegnelse, profilbillede eller henvisning til din professionelle profil i det omfang, samtykket omfatter disse oplysninger.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til at undersøge kundetilfredsheden og forbedre vores serviceydelser. Samtykke, jf. GDPR artikel 6, stk. 1, litra a, til anvendelse og offentliggørelse af personlige anbefalinger og tilknyttede profiloplysninger i markedsføringsøjemed. Deltagelse i undersøgelser er frivillig. Samtykke til offentliggørelse indhentes særskilt og er ikke en betingelse for deltagelse.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Besvarelser med personoplysninger slettes eller anonymiseres senest 12 måneder efter undersøgelsens afslutning. Personlige anbefalinger, der anvendes til markedsføring, opbevares i højst 24 måneder efter samtykkets afgivelse, medmindre et nyt samtykke indhentes. Anonymiserede resultater kan opbevares længere til statistiske formål.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#e5e3dc] pl-6">
                <h3 className="text-[#8397a9] font-medium mb-3">2.7. Intranet og brugerprofiler</h3>
                <div className="space-y-3">
                  <p><span className="font-medium text-[#8397a9]">Formål:</span> At give kunder og autoriserede brugere adgang til Nordstens Workspaces intranet, administrere brugerprofiler og adgangsrettigheder samt sikre platformens drift og sikkerhed.</p>
                  <p><span className="font-medium text-[#8397a9]">Personoplysninger:</span> Navn, e-mailadresse, virksomhedstilknytning, eventuelt telefonnummer og CVR-nummer samt brugeridentifikation, adgangsrettigheder, loginhistorik, IP-adresse og relevante tekniske oplysninger.</p>
                  <p><span className="font-medium text-[#8397a9]">Behandlingsgrundlag:</span> Opfyldelse af kontrakt, jf. GDPR artikel 6, stk. 1, litra b, når behandlingen er nødvendig for at levere intranettets funktioner til dig som fysisk person. Legitim interesse, jf. GDPR artikel 6, stk. 1, litra f, til administration af erhvervskunders brugere, adgangsstyring og beskyttelse af intranettets drift og sikkerhed. Samtykke, jf. GDPR artikel 6, stk. 1, litra a, til behandling af personoplysninger gennem eventuelle samtykkekrævende statistik- og markedsføringscookies.</p>
                  <p><span className="font-medium text-[#8397a9]">Opbevaringsperiode:</span> Brugerprofiloplysninger opbevares, så længe brugeren har en aktiv og berettiget adgang til intranettet. Ved ophør af adgangen slettes eller anonymiseres oplysningerne, når de ikke længere er nødvendige for kundeadministration eller andre lovlige formål. Login- og sikkerhedslogs opbevares i den periode, der er nødvendig for at opdage og undersøge adgangsfejl, misbrug og sikkerhedshændelser. Du kan læse mere om de konkrete cookies og ændre dit samtykke i intranettets cookiepolitik.</p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">3. Modtagere og databehandlere</h2>
            <p>
              Vi anvender eksterne leverandører til at understøtte vores drift og serviceydelser. Det omfatter leverandører af it-drift og hosting, kommunikationssystemer, booking- og kundeadministration, regnskab og betaling, videoovervågning, hjemmesideanalyse, nyhedsbreve, digitale spørgeskemaer samt intranet- og adgangsstyringsløsninger.
            </p>
            <p className="mt-3">
              Når leverandører behandler personoplysninger på vores vegne, sker det efter vores instruks og på grundlag af relevante databehandleraftaler, jf. GDPR artikel 28. Oplysninger kan desuden videregives til professionelle rådgivere og offentlige myndigheder, når der foreligger et lovligt grundlag.
            </p>
            <p className="mt-3">
              Du kan kontakte os, hvis du ønsker oplysninger om de konkrete modtagere af dine personoplysninger.
            </p>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">4. Overførsel til lande uden for EU/EØS</h2>
            <p>
              Vi anvender leverandører, som i visse tilfælde behandler eller tilgår personoplysninger uden for EU/EØS, herunder i USA. Det gælder blandt andet vores leverandør af nyhedsbrevs- og markedsføringsløsninger.
            </p>
            <p className="mt-3">
              Overførsler sker på et gyldigt grundlag efter GDPR kapitel V, eksempelvis EU-Kommissionens tilstrækkelighedsafgørelser, herunder EU-U.S. Data Privacy Framework for virksomheder med gyldig certificering, eller EU-Kommissionens standardkontraktbestemmelser (SCC) med eventuelle nødvendige supplerende beskyttelsesforanstaltninger.
            </p>
            <p className="mt-3">
              Du kan kontakte os for nærmere oplysninger om konkrete overførsler, de anvendte garantier og muligheden for at få adgang til en kopi af relevante beskyttelsesforanstaltninger.
            </p>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">5. Oplysningernes oprindelse og krav om afgivelse</h2>
            <p>
              Vi indsamler som udgangspunkt personoplysninger direkte fra dig. Vi kan også modtage kontakt- og virksomhedsoplysninger fra den virksomhed, du repræsenterer, eksempelvis når din arbejdsgiver oplyser, at du er kontaktperson eller skal have adgang til vores intranet.
            </p>
            <p className="mt-3">
              Det er som udgangspunkt frivilligt at afgive personoplysninger. Visse oplysninger er dog nødvendige for at indgå eller opfylde en aftale, herunder oplysninger til booking, fakturering og oprettelse af brugerprofiler. Hvis du ikke afgiver de nødvendige oplysninger, kan det betyde, at vi ikke kan levere den ønskede ydelse.
            </p>
            <p className="mt-3">
              Deltagelse i kundetilfredshedsundersøgelser og tilmelding til nyhedsbreve er frivillig.
            </p>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">6. Dine rettigheder</h2>
            <p className="mb-3">Du har efter GDPR følgende rettigheder, når betingelserne herfor er opfyldt:</p>
            <ul className="space-y-2 mb-4">
              <li><strong className="text-[#8397a9]">Indsigt:</strong> Ret til at få indsigt i de personoplysninger, vi behandler om dig.</li>
              <li><strong className="text-[#8397a9]">Berigtigelse:</strong> Ret til at få rettet urigtige oplysninger.</li>
              <li><strong className="text-[#8397a9]">Sletning:</strong> Ret til i visse tilfælde at få slettet dine oplysninger.</li>
              <li><strong className="text-[#8397a9]">Begrænsning:</strong> Ret til i visse tilfælde at få begrænset behandlingen.</li>
              <li><strong className="text-[#8397a9]">Indsigelse:</strong> Ret til at gøre indsigelse mod behandling på grundlag af legitim interesse.</li>
              <li><strong className="text-[#8397a9]">Dataportabilitet:</strong> Ret til i visse tilfælde at få udleveret eller overført dine oplysninger.</li>
              <li><strong className="text-[#8397a9]">Tilbagetrækning af samtykke:</strong> Ret til til enhver tid at trække et afgivet samtykke tilbage. Tilbagetrækning påvirker ikke lovligheden af den behandling, der er foretaget, før samtykket blev trukket tilbage.</li>
            </ul>
            <p className="font-medium text-[#8397a9] mb-2">Særlig ret til indsigelse</p>
            <p>
              Du kan til enhver tid gøre indsigelse mod behandling af dine personoplysninger til direkte markedsføring. Du kan desuden gøre indsigelse mod behandling på grundlag af legitim interesse af grunde, der vedrører din særlige situation.
            </p>
            <p className="mt-3">
              Du kan udøve dine rettigheder ved at kontakte os på{" "}
              <a href="mailto:info@nordstens.dk" className="text-[#9d2e1e] hover:underline">info@nordstens.dk</a>.
              Vi besvarer som udgangspunkt din henvendelse inden for en måned.
            </p>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-lg font-medium mb-3">7. Klage til Datatilsynet</h2>
            <p>
              Hvis du er utilfreds med vores behandling af dine personoplysninger, har du ret til at indgive en klage til Datatilsynet. Du finder yderligere oplysninger på{" "}
              <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-[#9d2e1e] hover:underline">www.datatilsynet.dk</a>.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
