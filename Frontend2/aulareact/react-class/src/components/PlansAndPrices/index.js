import Title from '../title';
import ImagePlans from '../imgPlans';
import imgplansandprices1 from '../../img/imgplansandprices1.png';
import imgplansandprices2 from '../../img/imgplansandprices2.png';
import imgplansandprices3 from '../../img/imgplansandprices3.png';

const listItems = [
  {
    title: "combo 1",
    src: imgplansandprices1,
    alt: "descrição de imagem", 
  },
  {
    title: "combo 2",
    src: imgplansandprices2,
    alt: "descrição de imagem", 
  },
  {
    title: "combo 3",
    src: imgplansandprices3,
    alt: "descrição de imagem",
  },

];

function PlansAndPrices() {
    return (
        <div>
            {listItems.map(function (item) {
                return (
                    <div>
                        <Title title={item.title} />
                        <ImagePlans src={item.src} alt={item.alt} />
                    </div>
                );
            })}
        </div>
    );
}

export default PlansAndPrices;
