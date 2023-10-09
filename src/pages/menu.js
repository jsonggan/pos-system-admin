import TopNav from '../components/topNav';
import menu from '../data/demo/food.json';
import "../styles/css/global.css"

function Menu() {
  const categories = Object.keys(menu);
  return (
    <>
      <TopNav />
      <div className='flex overflow-scroll '>
        {categories.map((category, index) => (
          <div key={index} className="border border-gray-100 drop-shadow-sm flex-shrink-0 min-w-[80px] text-center p-2 justify-center items-center">
            <p className="text-sm text-grey2">{category}</p> 
          </div>
          ))}
      </div>

      {/* menulist */}
      <div className="px-6 bg-grey11 pt-4">
        {categories.map((category, index) => (
          // menu card
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2> 
            <div className="grid grid-cols-2 gap-2">
              {menu[category].map((item) => (
                <div key={item.id} className={`bg-white rounded-lg shadow flex flex-col h-[320px] ${item.isAvailable ? '' : 'opacity-50'}`}>
                  <div className='relative'>
                    <img src={item.imageUrl} alt="mushroom" className="w-full h-auto rounded-ss-lg rounded-se-lg" />
                    {
                      !item.isAvailable && (
                        <div className="absolute bottom-0 text-center bg-red-700 w-full">
                          <p className="text-white text-sm p-[2px] text-center font-semibold">Sold Out</p>
                        </div>
                      )
                    }
                  </div>
                  
                  <div className='p-2 flex flex-col justify-between h-full'>
                    <h3 className="text-base text-grey2 flex">{item.title}</h3>
                    <div className='flex flex-col'>
                      <p className="text-grey3 font-semibold mb-1">${item.price}</p>
                      <button className="bg-primary text-white rounded-md p-1 w-full">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
