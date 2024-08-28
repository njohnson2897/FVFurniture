import furniturerecycle from '../assets/furniturerecycle.PNG';
import furniturerecycle2 from '../assets/furniturerecycle2.PNG';
import furniturerecycle3 from '../assets/furniturerecycle3.PNG';

function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <div className='container d-flex'>
      <div className="column mx-5">
        <div className="row border-bottom my-3">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi!</p>
        </div>
        <div className="row my-3">
        <img className='px-3' src={furniturerecycle} alt="" height='300'></img>
        </div>
        <div className="row border-top my-3">
            <h2 className="mt-3">FAQs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error recusandae, minima quisquam facere unde numquam libero repellat molestiae aliquam reiciendis beatae, quod veritatis. Voluptatem suscipit maiores deleniti? Dolorum, consectetur doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae amet, fugit accusantium consequuntur eum maiores ad laboriosam, ratione magnam nihil necessitatibus, officiis placeat quidem quod consectetur minus illum doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus. Exercitationem, dicta id. Necessitatibus maiores quae suscipit nulla, iure quia dolores magnam non? Iusto dolorum dolores aspernatur expedita, ad sunt.</p>
        </div>
      </div>
      <div className="column">
        <div className="row border-bottom py-4 my-3">
        <img className='px-3' src={furniturerecycle2} alt="" height='300'></img>
        </div>
        <div className="row my-3">
            <h2>Who We Are</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sunt accusamus iusto accusantium? Aliquam reprehenderit fuga neque facilis nihil iste officia, inventore aliquid dolor, magnam consequatur, dolores autem. Provident, sequi!</p>
        </div>
        <div className="row border-top py-4 my-3">
        <img className='px-3' src={furniturerecycle3} alt="" height='300'></img>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
