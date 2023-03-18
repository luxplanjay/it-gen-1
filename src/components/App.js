import { Suspense, useRef } from 'react';

export const App = () => {
  const formRef = useRef();

  const scrollToForm = () => {
    const { top } = formRef.current.getBoundingClientRect();
    window.scrollTo({
      behavior: 'smooth',
      top,
    });
  };

  return (
    <>
      <button onClick={scrollToForm}>Назначить консультацию</button>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          nesciunt sapiente velit dolores asperiores. Inventore eaque aliquam
          delectus omnis, consequatur illo maiores ipsa neque deserunt unde aut.
          Laudantium labore ab nihil, beatae eaque sit quia eveniet! Cupiditate
          obcaecati perferendis quasi aut vel modi quibusdam magnam nostrum
          illum, odio nemo hic ut, esse totam! Nulla optio cupiditate illo eos
          quod quae, similique distinctio ea! Eligendi nulla error corrupti,
          inventore perferendis perspiciatis earum a rerum ullam, aut molestiae,
          pariatur velit minus omnis tenetur. Sunt voluptates, alias
          perspiciatis amet, provident aliquid incidunt nulla cumque, voluptate
          facere fugiat architecto. Odit incidunt placeat dolor culpa assumenda,
          repudiandae vitae eos voluptas saepe atque, fugiat exercitationem
          soluta numquam ex ad nisi aliquid voluptate velit. Aliquid accusamus
          minima nesciunt? Dolore provident dignissimos sapiente vel, quibusdam
          deleniti dolorem dolores neque tenetur, perspiciatis optio incidunt?
          Enim velit repellendus aspernatur! Repellat possimus, obcaecati illo
          voluptas ut maiores vel alias incidunt quae rerum at totam quasi
          tenetur, a accusamus minima aut. Error deserunt quisquam dolor nobis
          laboriosam, ut incidunt quibusdam possimus vero minus consectetur odio
          voluptate minima et quae sunt itaque consequatur qui, illum eligendi
          neque. Expedita tempora cupiditate, quis sunt recusandae, nisi soluta
          at quaerat exercitationem repellat autem commodi et consectetur
          doloremque porro sint ad! Vitae reprehenderit qui, tenetur earum quod
          nemo, ab odio autem maxime distinctio iusto a dolore repellat eum
          quaerat voluptates dolorum. Sapiente placeat itaque ratione nobis
          earum laborum accusamus ea sint facere, delectus dolorem officiis
          ipsam. Rerum nulla velit exercitationem assumenda sed blanditiis
          deleniti, nisi libero maiores commodi magnam provident alias
          asperiores similique nemo facere reiciendis molestias doloremque,
          excepturi ea aliquid. Odit facilis est recusandae adipisci laboriosam
          iusto quos libero repellat tempora? Optio hic, asperiores non libero
          nostrum obcaecati nemo fugiat autem aliquid alias numquam, similique
          veniam sit quod porro voluptate quia at, maiores unde cum quaerat
          architecto ea? Inventore amet voluptas, optio eius minus fugit
          temporibus qui ullam quaerat in delectus sint eos dignissimos ad
          officia dolor culpa sequi, vitae nesciunt cumque a corrupti.
          Cupiditate ab recusandae corrupti adipisci architecto optio quia
          minima! Ut accusantium expedita corporis quam pariatur? At quasi porro
          quas soluta odit laborum beatae ipsam, nobis alias ex, consequuntur
          perspiciatis unde dolorum natus a repellat quidem eveniet velit totam
          minus quo doloremque, ipsum modi. Vero cupiditate ut dolorem minus,
          debitis amet? Voluptates alias, voluptatem perferendis, cupiditate at
          porro deserunt magni ea quo explicabo, commodi vel nostrum itaque nam
          laborum enim? Voluptates numquam recusandae tempora illum accusantium
          excepturi hic quisquam veritatis voluptatibus. Magni, illum. Ducimus
          odio cumque pariatur doloremque necessitatibus laudantium tenetur unde
          commodi harum consequuntur eius dolore labore officia reprehenderit
          at, iusto eligendi, nesciunt eaque quis sint molestias odit sed. Sit
          iure at corrupti ullam dolores hic tempore ex deserunt enim obcaecati
          placeat, eveniet eius ea suscipit atque quae in distinctio facere
          voluptatem architecto? Iusto fugit sapiente, nihil temporibus incidunt
          et quisquam veritatis debitis esse culpa, officia corrupti.
          Accusantium distinctio ullam praesentium officia sapiente magnam ipsam
          a saepe tempore maxime voluptate sed, soluta, fugit eligendi, sint
          repellendus id aliquam minus! Soluta, necessitatibus animi.
        </p>
        <p>
          Voluptates eveniet, nam voluptas fuga alias excepturi magnam
          consectetur animi mollitia amet maiores magni veritatis quos, ad
          atque, deleniti ducimus provident voluptatum aperiam libero nostrum
          saepe quae natus numquam. Hic voluptate illo mollitia vitae velit
          voluptas dolore assumenda. Doloremque impedit tempora ducimus
          molestiae, aut nobis, sunt quidem magni possimus officia consequatur
          accusamus necessitatibus facere delectus laudantium nesciunt? Animi
          debitis accusamus, laborum quis quisquam quasi eligendi aperiam nihil
          ducimus, assumenda quia rerum molestias repellendus voluptatibus
          voluptatum atque. Neque, repellat voluptate enim doloribus voluptatem
          modi mollitia cum nihil deleniti voluptatum, laborum soluta fugiat
          minima laudantium iste similique esse officiis illo nam id impedit
          accusantium? Harum nam ipsam quaerat expedita corrupti adipisci optio
          quisquam nostrum. Nihil quaerat esse rerum id, assumenda eligendi
          aspernatur maxime. Vitae accusamus nisi non, sequi ea doloremque nam
          quasi officia enim explicabo dolores minus ad voluptates, optio unde
          eligendi? Illo ipsa quo voluptatibus deleniti nesciunt illum provident
          recusandae, velit, facere nulla quia neque enim dicta amet pariatur,
          soluta laboriosam dolorum? Et reiciendis vel ratione. Repellendus
          facilis laborum alias id expedita fuga quidem perspiciatis in quaerat,
          minima dolores! Pariatur ipsum sunt quis soluta natus exercitationem,
          qui iste? Qui incidunt odio sapiente facere nesciunt maxime voluptas,
          repellendus eveniet iste laudantium eaque, perferendis dolore, alias
          possimus. Quis, magni consequatur itaque sit quidem, quibusdam beatae
          aliquam necessitatibus, laboriosam accusantium alias? Vel voluptatibus
          neque dolorum unde impedit maiores nulla libero ratione in eius quo
          velit aspernatur consectetur dolorem voluptate, quasi earum quas
          beatae amet aperiam similique, provident illo ipsam! Quidem esse
          aliquid magni fuga optio? Nam hic molestias iste vero, ex quasi
          aperiam? Deleniti voluptatibus, quaerat suscipit nam officia maiores
          quia laudantium autem cupiditate asperiores explicabo quo inventore
          ipsum sint perspiciatis vero ullam ratione temporibus officiis.
          Voluptas, fugiat? Quaerat commodi maxime asperiores libero voluptas,
          culpa unde velit quis harum impedit doloribus quisquam numquam officia
          mollitia animi cumque minus quo delectus debitis a, aliquam in
          eligendi deleniti ex? Et, maiores ex. Eos, earum? Praesentium vitae
          doloremque temporibus provident eligendi cumque eveniet laboriosam,
          tempora totam facere, excepturi optio architecto, quasi numquam
          repudiandae reiciendis consectetur hic nisi quae sit? Unde quaerat
          modi explicabo, dolorem natus voluptatem consectetur facere dicta hic
          nulla amet quia quisquam! Blanditiis quasi delectus obcaecati,
          mollitia quaerat, dolore debitis quae labore corporis assumenda
          quidem, libero sed enim! Dignissimos iure numquam accusantium maxime
          magni, veritatis ducimus consectetur! Error, repellendus vitae dolor a
          obcaecati magni quasi nulla unde et culpa. Ab accusamus reprehenderit
          fugiat est itaque perferendis et nisi voluptate tenetur error quo
          magnam, neque consectetur nesciunt, exercitationem deleniti laborum
          laboriosam esse inventore perspiciatis quis nulla! Eaque sequi modi
          exercitationem minus id dicta, adipisci consequatur vitae dolorum
          voluptates cumque quis inventore ea magni. Optio quibusdam consectetur
          natus. Animi minima consequuntur beatae quos impedit voluptates ipsa
          ipsam voluptatum soluta voluptatibus molestias repellendus, iste
          dolorum. In nihil, amet facere aspernatur quam voluptatibus animi
          tempore sequi culpa. Omnis at totam consequuntur ex voluptatum
          eligendi alias pariatur ipsum illo expedita deserunt debitis
          aspernatur autem officiis ad esse, quos excepturi id ipsa minima nemo
          quibusdam doloremque voluptatibus! Corporis explicabo unde animi.
        </p>
        <p>
          Magnam, iste ad enim consequatur tempore maxime beatae quidem libero
          qui corporis nesciunt nemo veniam aliquid, eius nam perferendis
          exercitationem maiores quas quibusdam officia blanditiis aperiam
          quaerat! Non nulla minima corrupti unde, veritatis est aliquam! Cumque
          error aut ipsa porro, amet, laborum maiores tempore aspernatur, labore
          quae modi non dolore voluptatum iusto temporibus natus quia impedit?
          Commodi sapiente ex amet ipsum quo, hic autem laboriosam consequuntur
          dicta rem dolorem ratione voluptate soluta harum explicabo corporis
          praesentium temporibus consequatur mollitia! Perspiciatis sed aliquid
          accusamus tempora quam quos ratione quod optio blanditiis maiores!
          Praesentium ut repellat rerum laborum nisi itaque deserunt beatae eius
          accusamus quam hic voluptates similique labore, assumenda atque
          nostrum, fugiat dolorum incidunt. Officiis provident reprehenderit
          sequi dolor, voluptatum esse asperiores explicabo voluptatibus
          quisquam! Provident, harum reiciendis? Sed optio dolorem, delectus
          nisi quisquam ea, ipsam aperiam consequatur, sint qui eos similique
          pariatur dolor dignissimos facere repudiandae illum ab hic culpa
          quidem totam aliquid eius architecto praesentium? Sed sunt maiores
          animi et cum adipisci iure officia architecto! Qui, vel sequi! Laborum
          voluptatum quibusdam fugit eos eius dolorum, libero ex delectus ipsum?
          Ducimus ut, in voluptatum reprehenderit nisi id magnam dolore
          accusamus culpa. Commodi, sunt fugiat suscipit eligendi itaque rerum
          eos deserunt voluptates architecto enim accusantium et fugit vel.
          Dolores quo qui vel sed quisquam nobis adipisci ad, libero magni sint
          fugiat nemo ipsum laudantium temporibus cupiditate rerum id illum.
          Labore animi neque odit ducimus tempora a ex! Laborum harum temporibus
          velit inventore nesciunt cum accusamus officia quae, facere sunt
          error, dolores ducimus delectus natus deleniti optio voluptate.
          Quaerat iste, ratione distinctio fuga recusandae odit eaque aut
          deleniti, eveniet enim asperiores facere vero non fugit consequatur
          est doloremque accusamus ab! Suscipit delectus ducimus commodi, ad
          sapiente repellat laboriosam quasi maxime architecto. Blanditiis quia
          cupiditate nulla animi iusto doloremque nostrum tempore quisquam
          dolores eaque, enim, sunt, atque possimus repudiandae veritatis quam
          nesciunt a nam tempora quo beatae vero. Iste optio sint debitis esse
          voluptas ipsam ab tenetur vero quibusdam at aperiam blanditiis
          voluptate fugit quos consequatur accusantium assumenda omnis, nesciunt
          eligendi? Maxime enim quam tenetur a, neque, odio laudantium iure
          sapiente facere recusandae nulla. Ratione numquam quod nihil, magnam
          debitis sed, vel explicabo temporibus nesciunt totam corporis
          delectus? Dolore unde, officiis minus veritatis tempore dolorum ea.
          Ex, magnam ipsam corporis inventore distinctio repellendus itaque
          expedita nulla blanditiis velit voluptatem cum facilis repellat. Ab
          nobis possimus officiis illo consequatur voluptatum laboriosam, quo
          veniam voluptatibus! Distinctio neque repellendus, cum non esse
          necessitatibus doloremque, expedita praesentium totam quo eum
          explicabo pariatur! Tempore mollitia iure voluptate libero est
          aspernatur maiores, totam consequatur ex error? Laboriosam minima vero
          ipsa dolore aperiam impedit id iste. Nemo quos ipsum inventore odit ab
          enim possimus officia dolore. Eaque dolor, animi culpa placeat illum
          accusantium quo consectetur? Maxime eligendi nesciunt pariatur error
          nobis magni natus sed, laborum velit rem facere quas beatae a animi
          incidunt delectus aut dolores nisi! Natus, ipsum! Error iure ab
          veniam? Nemo dignissimos nam tenetur odit iusto assumenda quidem
          accusamus dolorum facilis soluta? Alias voluptate nemo eos quasi?
        </p>
        <p>
          Maiores odio fugiat explicabo tempora voluptatem quae aspernatur
          repellendus repudiandae ipsum. Autem eius nesciunt adipisci saepe
          suscipit ex quas id reiciendis ad impedit. Amet, fugit maiores vitae
          maxime ipsam natus qui vel beatae quod consectetur cupiditate odio
          unde eum quisquam distinctio libero fugiat voluptates dolor molestias
          in sequi sunt impedit mollitia? Assumenda adipisci cumque repellendus
          illo dicta molestias, voluptate distinctio facilis est rem dolore
          suscipit voluptas. Fuga voluptate reprehenderit, possimus deserunt
          quae aspernatur excepturi voluptates voluptatibus dignissimos! Minima
          quidem, necessitatibus, quam similique libero quo soluta ut tempora
          consequatur impedit ipsum cumque officiis dolores harum est quia
          numquam eveniet doloremque amet? Ducimus recusandae sed ut corporis
          quisquam nulla quibusdam exercitationem? Eaque laborum delectus
          inventore unde quae in! Magni id, velit atque perferendis reiciendis
          eos deleniti corporis ea placeat laudantium soluta unde cumque numquam
          a deserunt dolorum? Nobis, quae fugiat. Quam, magni eum. Rem quod sed
          assumenda iste enim! Adipisci porro totam atque repellendus expedita
          cupiditate earum nemo iste dolor accusamus est iusto facilis, officiis
          quidem inventore ipsum, ex in. Error perspiciatis ducimus magnam
          dolorum provident repudiandae voluptatem eum et. Aperiam, facilis cum
          laudantium necessitatibus deserunt dolor quas voluptatibus aspernatur
          incidunt, quibusdam, soluta quidem asperiores? Iure, voluptatem quis!
          Voluptatum culpa laudantium minus quaerat iusto similique nisi quod
          natus incidunt excepturi tempore atque nobis cupiditate vel
          doloremque, quisquam maiores! Minima, ratione velit deleniti error
          commodi labore aperiam ducimus molestiae assumenda similique! Nulla
          mollitia praesentium, quas doloremque optio nesciunt fuga facere
          repellendus obcaecati ea, omnis inventore, dolorem sit sapiente eos
          architecto voluptatum. Placeat maxime quod temporibus ea ex!
          Reprehenderit velit illum maxime, deleniti voluptas animi cumque
          impedit voluptatibus nobis dolores cum unde voluptate dicta
          praesentium consectetur totam. Vitae hic dolorem iusto corporis magni
          dolore quia labore praesentium modi sunt facilis non quis
          exercitationem sit impedit suscipit corrupti fugit, in rerum veritatis
          temporibus minus distinctio! Inventore dolores aspernatur non
          architecto eveniet, reiciendis, laudantium alias voluptates ea minima
          totam incidunt cupiditate asperiores velit fuga voluptas suscipit
          impedit veniam quas, eligendi sunt! Harum qui aspernatur reprehenderit
          quisquam laboriosam facere vero dicta. Sapiente, odit atque unde velit
          possimus iste veritatis, amet ab doloremque, voluptas ipsam? Esse ex,
          excepturi rem quas earum labore quasi aperiam laboriosam tempora
          quidem ipsum ratione nostrum doloribus consequuntur eum sit at sint
          magni. Unde vero nostrum enim, aliquam voluptates nulla accusamus
          porro, quo eaque molestiae quia quisquam alias corporis totam ut
          beatae. Eum velit doloremque totam labore nobis ipsam recusandae
          dolorem, aliquam laboriosam! Molestias illo veniam voluptas,
          accusantium, laborum labore excepturi pariatur dolore dignissimos
          impedit ad! Aperiam inventore consectetur aliquam tempora modi harum
          saepe. Culpa a repudiandae dignissimos, debitis maxime suscipit totam
          quidem alias natus sit excepturi molestias ipsum odit modi ratione
          fugiat quibusdam earum recusandae animi quam magnam ullam similique
          non mollitia. Tenetur libero magni quasi vero ducimus tempora commodi
          odio vitae iusto quis et ad laudantium, eaque exercitationem adipisci
          neque facilis quos pariatur consectetur tempore ut voluptatibus non
          reiciendis error! Error sit, velit ratione vero, nemo consequatur
          quasi, eos blanditiis obcaecati dolore tenetur quibusdam dolor
          repellendus animi optio laboriosam consequuntur placeat! At.
        </p>
        <p>
          Cumque, laborum. Velit dolore laudantium deserunt hic natus molestiae
          cum aspernatur fuga nam beatae! Nihil, repellat molestias. Ullam, eum.
          Eos vitae culpa sint dolor dolorum quia reiciendis architecto minima
          consequatur modi voluptates, quam fugiat dicta sit dolorem suscipit
          eius corrupti esse iure molestias, enim perferendis! Fugiat
          repellendus reiciendis, velit iste atque porro iure aperiam error
          distinctio cupiditate! Error magnam natus dolorem quasi exercitationem
          iste quos minima perferendis facere. Incidunt repudiandae neque ipsum
          aperiam saepe quod quidem earum dolorem dignissimos, veritatis tempora
          mollitia tempore recusandae sed ad excepturi, odio consectetur
          asperiores nihil hic eos modi. Nemo labore ratione veniam iusto
          provident quisquam in iure quasi eos quod. Sunt facere consequuntur
          cum, vitae necessitatibus perspiciatis totam, rem rerum, deleniti enim
          odio? Animi architecto nam dignissimos alias minima explicabo aliquid
          neque aliquam ipsum, illum sunt. Quaerat distinctio consectetur itaque
          amet totam fugiat eaque enim natus. Vero temporibus eum officiis
          impedit ipsa obcaecati delectus nisi nostrum labore, quos magnam
          debitis quibusdam asperiores vitae quia necessitatibus! Ratione
          aliquam adipisci repudiandae iusto quae amet iure magni animi,
          temporibus tempora voluptatibus laboriosam esse aut repellendus et
          voluptates culpa fugit recusandae maiores soluta cumque dolore! Quae
          architecto ipsa corporis magni provident non sunt adipisci in maxime
          mollitia vitae quia dolore eligendi, temporibus autem voluptates
          neque. Ipsa quam cum placeat modi in voluptatem unde dolorem odio?
          Perspiciatis quaerat libero necessitatibus vero ratione? Cupiditate,
          aspernatur? Eum provident, ab sed vitae temporibus nemo eveniet
          facilis ducimus tempore corporis vel adipisci consectetur pariatur
          quos magni fuga. Minus, voluptates exercitationem quod fuga debitis ex
          eius quo illum sequi provident adipisci pariatur unde, omnis eaque
          laudantium quas amet totam. Doloremque inventore similique quod,
          maxime quo laudantium doloribus quae, blanditiis tempora quia commodi
          voluptas nam deleniti labore consectetur hic sit dolor? Harum non
          soluta aspernatur distinctio, blanditiis iste molestias unde! Libero
          quasi quidem delectus explicabo ullam labore dolores veritatis maiores
          enim, eveniet, cumque omnis aliquam, alias inventore velit officia
          suscipit soluta. Eligendi et cumque commodi possimus eos voluptatibus
          dolorem, expedita quos amet a voluptates veritatis voluptate animi
          maxime excepturi aspernatur! Dolor, saepe dolore dolorum autem
          veritatis ipsam facere maxime necessitatibus? Laboriosam adipisci
          ipsum nobis odio reprehenderit, culpa magnam accusantium harum at
          voluptatem repellat quo exercitationem consequuntur quibusdam? Minus,
          exercitationem eveniet libero velit reprehenderit recusandae. Illum
          explicabo pariatur ullam cum, vitae corrupti harum! Et nisi nesciunt
          sed ab nam officiis tempora ratione pariatur consequuntur temporibus
          architecto labore voluptates, optio accusantium iure ipsum explicabo
          facere libero quibusdam aspernatur. Minus cupiditate sit repellat
          quisquam blanditiis quaerat ducimus est odio perspiciatis accusantium
          dolores, harum quas reprehenderit laborum totam obcaecati, nam
          voluptatum ipsum nesciunt culpa dicta veniam! Quae, adipisci illo
          dolores, eius porro, autem quibusdam dolore illum animi quidem aut
          possimus. Perferendis accusantium ad maxime tempore nobis libero.
          Molestias vero accusantium tenetur expedita, aliquid omnis labore
          ullam tempora vel placeat eum! Obcaecati debitis esse quibusdam
          architecto voluptates incidunt cupiditate nemo illum, eligendi nihil
          facere autem asperiores eum magni quidem quisquam libero illo omnis
          labore quas minima qui ab saepe. Asperiores mollitia nisi tempora
          impedit. Adipisci doloremque quas cumque veniam eveniet.
        </p>
      </div>
      <form ref={formRef}>
        <input type="text" />
        <button type="submit">Назначить</button>
      </form>
    </>
  );
};
