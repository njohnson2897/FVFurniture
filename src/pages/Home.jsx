import chifurniturebank from '../assets/chifurniturebank.PNG';
import furniturestore from '../assets/furniturestore.PNG';
import restore from '../assets/restore.PNG';


function HomePage() {
  return (
    <div>
    <h1>Welcome to Fox Valley Furniture</h1>
    <div className="container d-flex">
      <div className="column col-lg-6 col-md-4 col-sm-3">
            <div className="item border-bottom">
            <img className='px-3' src={chifurniturebank} alt="" height='300'></img>
            </div>
            <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolorum atque quos error amet eius animi, odit quod consequuntur debitis exercitationem sequi reiciendis voluptatum nihil id laborum mollitia ducimus magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil similique incidunt consequuntur dolores! Mollitia labore architecto fugiat deserunt odit sunt hic totam qui cumque repudiandae doloribus necessitatibus, aspernatur tenetur!</div>
            <div className="item border-top">
            <img className='px-3' src={restore} alt="" height='300'></img>
            </div>
        </div>
        <div className="column col-lg-6 col-md-4 col-sm-3">
          <div className="item border-bottom">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio tempore, sapiente, aliquam veniam est impedit similique assumenda labore blanditiis beatae deserunt pariatur quasi magni officia maxime ab! Pariatur, eius modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro fuga illo ducimus explicabo iure ratione ab ipsa, error ea minus nam iusto nemo tenetur sequi saepe incidunt delectus, voluptatum nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit laudantium dolor debitis maiores minima eum ducimus eos deserunt a, quasi distinctio dicta ad repellat laboriosam ipsam unde, cumque doloribus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur laboriosam iste dicta doloribus corrupti. Magnam praesentium neque repellat, distinctio eligendi saepe ducimus fuga dolores dolor voluptatem? At, unde ea?</div>
          <div className="item">
          <img className='px-3' src={furniturestore} alt="" height='300'></img>
          </div>
          <div className="item border-top">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis reiciendis in soluta ipsa delectus recusandae. Reprehenderit culpa sunt similique non maxime, dolorem, unde omnis praesentium eos fuga dolore totam ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia est rerum similique qui eligendi totam, dicta optio. Inventore fugiat atque, magni ad, consectetur quas odit quae quos cum non cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias mollitia illum excepturi ipsam sed et impedit officiis iure in consequuntur facilis, minima suscipit quas vel officia necessitatibus porro voluptas?</div>
        </div>
    </div>
    </div>
  );
}

export default HomePage;
