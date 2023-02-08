import React, { Component } from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';




class App extends Component {
  state = {
    disabled: "1",
    total: 217000000,
    percent: 0,
    damua: 0,
    products: [
      {
        id: 0,
        name: "AirPods Pro",
        price: "249",
        imageUrl: "/assets/images/image1.jpg",
        number: 0,
      },
      {
        id: 1,
        name: "Nintendo Switch",
        price: "299",
        imageUrl: "/assets/images/Image2.jpg",
        number: 0,
      },
      {
        id: 2,
        name: "PS5",
        price: "499",
        imageUrl: "/assets/images/image3.jpg",
        number: 0,
      },
      {
        id: 3,
        name: "Xbox Series X",
        price: "499",
        imageUrl: "/assets/images/image4.jpg",
        number: 0,
      },
      {
        id: 4,
        name: "Iphone 14 Pro Max - 1TB",
        price: "1,599",
        imageUrl: "/assets/images/image5.jpg",
        number: 0,
      },
      {
        id: 5,
        name: "Samsung S22 Ultra - 1TB",
        price: "1,399",
        imageUrl: "/assets/images/image6.jpg",
        number: 0,
      },
      {
        id: 6,
        name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB)",
        price: "4,699",
        imageUrl: "/assets/images/image7.jpg",
        number: 0,
      },
      {
        id: 7,
        name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
        price: "6,999",
        imageUrl: "/assets/images/image8.jpg",
        number: 0,
      },
      {
        id: 8,
        name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)",
        price: "4,950",
        imageUrl: "/assets/images/image9.jpg",
        number: 0,
      },
      {
        id: 9,
        name: "Razer Blade 14 Top spec (2022)",
        price: "2,799",
        imageUrl: "/assets/images/image10.jpg",
        number: 0,
      },
      {
        id: 10,
        name: "Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)",
        price: "53,799",
        imageUrl: "/assets/images/image11.jpg",
        number: 0,
      },
      {
        id: 11,
        name: "Ipad Air M1 Chip (2022) (256GB)",
        price: "749",
        imageUrl: "/assets/images/image12.jpg",
        number: 0,
      },
      {
        id: 12,
        name: "Tesla Bot (Available 2024)",
        price: "20,000",
        imageUrl: "/assets/images/image13.jpg",
        number: 0,
      },
      {
        id: 13,
        name: "Start your own StartUp",
        price: "5,000,000",
        imageUrl: "/assets/images/image14.jpg",
        number: 0,
      },
      {
        id: 14,
        name: "Open Fast Food Franchise",
        price: "1,500,000",
        imageUrl: "/assets/images/image15.jpg",
        number: 0,
      },
      {
        id: 15,
        name: "Spotify for 80 years",
        price: "9,600",
        imageUrl: "/assets/images/image16.jpg",
        number: 0,
      },
      {
        id: 16,
        name: "Entire Steam library (2022 - No discounts)",
        price: "628,000",
        imageUrl: "/assets/images/image17.jpg",
        number: 0,
      },
      {
        id: 17,
        name: "Netflix for 80 Years",
        price: "13,500",
        imageUrl: "/assets/images/image18.jpg",
        number: 0,
      },
      {
        id: 18,
        name: "Entire production of Nvidia GPUs for 2022",
        price: "700,000,000",
        imageUrl: "/assets/images/image19.jpg",
        number: 0,
      },
      {
        id: 19,
        name: "Influence 1 high ranking politician",
        price: "2,000,000",
        imageUrl: "/assets/images/image20.jpg",
        number: 0,
      },
      {
        id: 20,
        name: "Private Concert with ANY Super Star",
        price: "1,000,000",
        imageUrl: "/assets/images/image21.jpg",
        number: 0,
      },
      {
        id: 21,
        name: "Give 10,000 USD to 5000 people",
        price: "50,000,000",
        imageUrl: "/assets/images/image22.jpg",
        number: 0,
      },
      {
        id: 22,
        name: "LG 88' OLED 8K ThinQ®",
        price: "19,990",
        imageUrl: "/assets/images/image23.jpg",
        number: 0,
      },
      {
        id: 23,
        name: "Fiat 500",
        price: "19,000",
        imageUrl: "/assets/images/image24.jpg",
        number: 0,
      },
      {
        id: 24,
        name: "Toyota Camry",
        price: "29,000",
        imageUrl: "/assets/images/image25.jpg",
        number: 0,
      },
      {
        id: 25,
        name: "Ford F150 Raptor 2022",
        price: "65,900",
        imageUrl: "/assets/images/image26.jpg",
        number: 0,
      },
      {
        id: 26,
        name: "Tesla Model S Plaid",
        price: "132,000",
        imageUrl: "/assets/images/image27.jpg",
        number: 0,
      },
      {
        id: 27,
        name: "Cybertruck (Tri Motor)",
        price: "70,000",
        imageUrl: "/assets/images/image28.jpg",
        number: 0,
      },
      {
        id: 28,
        name: "Tesla Roadster 2022",
        price: "200,000",
        imageUrl: "/assets/images/image29.jpg",
        number: 0,
      },
      {
        id: 29,
        name: "Ferrari F8",
        price: "276,000",
        imageUrl: "/assets/images/image30.jpg",
        number: 0,
      },
      {
        id: 30,
        name: "Lamborghini Aventador SVJ",
        price: "512,000",
        imageUrl: "/assets/images/image31.jpg",
        number: 0,
      },
      {
        id: 31,
        name: "Bugatti La Voiture Noire",
        price: "11,000,000",
        imageUrl: "/assets/images/image32.jpg",
        number: 0,
      },
      {
        id: 32,
        name: "1000 Acres of land",
        price: "4,100,000",
        imageUrl: "/assets/images/image33.jpg",
        number: 0,
      },
      {
        id: 33,
        name: "Private Island, Central America (medium size)",
        price: "4,950,000",
        imageUrl: "/assets/images/image34.jpg",
        number: 0,
      },
      {
        id: 34,
        name: "Eating out for 80 years (4 meals/day)",
        price: "3,100,000",
        imageUrl: "/assets/images/image35.jpg",
        number: 0,
      },
      {
        id: 35,
        name: "Diamond Ring (Tiffany - 1 carat)",
        price: "17,000",
        imageUrl: "/assets/images/image36.jpg",
        number: 0,
      },
      {
        id: 36,
        name: "Whisky Macallan Michael Dillon 1926",
        price: "1,530,000",
        imageUrl: "/assets/images/image37.png",
        number: 0,
      },
      {
        id: 37,
        name: "Rolex",
        price: "12,000",
        imageUrl: "/assets/images/image38.jpg",
        number: 0,
      },
      {
        id: 38,
        name: "Les Femmes d'Alger by Picasso",
        price: "179,400,000",
        imageUrl: "/assets/images/image39.jpg",
        number: 0,
      },
      {
        id: 39,
        name: "Monalisa by Leonardo da Vinci (estimate)",
        price: "869,000,000",
        imageUrl: "/assets/images/image40.jpg",
        number: 0,
      },
      {
        id: 40,
        name: "Helicopter Bell 206",
        price: "750,000",
        imageUrl: "/assets/images/image41.jpg",
        number: 0,
      },
      {
        id: 41,
        name: "10 plastic surgeries",
        price: "130,000",
        imageUrl: "/assets/images/image42.jpg",
        number: 0,
      },
      {
        id: 42,
        name: "One week in EVERY country of the planet",
        price: "1,250,000",
        imageUrl: "/assets/images/image43.jpg",
        number: 0,
      },
      {
        id: 43,
        name: "College Education (USA)",
        price: "170,000",
        imageUrl: "/assets/images/image44.jpg",
        number: 0,
      },
      {
        id: 44,
        name: "NFL Team (Average)",
        price: "3,000,000,000",
        imageUrl: "/assets/images/image45.jpg",
        number: 0,
      },
      {
        id: 45,
        name: "NBA Team (Average)",
        price: "2,400,000,000",
        imageUrl: "/assets/images/image46.jpg",
        number: 0,
      },
      {
        id: 46,
        name: "F1 Team (Average)",
        price: "700,000,000",
        imageUrl: "/assets/images/image47.jpg",
        number: 0,
      },
      {
        id: 47,
        name: "Jet Gulfstream G450",
        price: "17,000,000",
        imageUrl: "/assets/images/image48.jpg",
        number: 0,
      },
      {
        id: 48,
        name: "M1 Abrams",
        price: "8,000,000",
        imageUrl: "/assets/images/image49.jpg",
        number: 0,
      },
      {
        id: 49,
        name: "Produce a Hollywood Movie",
        price: "90,000,000",
        imageUrl: "/assets/images/image50.jpg",
        number: 0,
      },
      {
        id: 50,
        name: "Regular Modern Apartment (3 bd, 2 ba)",
        price: "320,000",
        imageUrl: "/assets/images/image51.jpg",
        number: 0,
      },
      {
        id: 51,
        name: "Paris Luxury Apartment(3 bd, 3 ba)",
        price: "3,200,000",
        imageUrl: "/assets/images/image52.jpg",
        number: 0,
      },
      {
        id: 52,
        name: "L.A Home (5bd, 6ba)",
        price: "6,000,000",
        imageUrl: "/assets/images/image53.jpg",
        number: 0,
      },
      {
        id: 53,
        name: "L.A Mega Mansion (8 bd, 20 ba)",
        price: "52,000,000",
        imageUrl: "/assets/images/image54.jpg",
        number: 0,
      },
      {
        id: 54,
        name: "Modern Building (35 condos + 10 Offices)",
        price: "12,000,000",
        imageUrl: "/assets/images/image55.jpg",
        number: 0,
      },
      {
        id: 55,
        name: "Sailboat",
        price: "130,000",
        imageUrl: "/assets/images/image56.jpg",
        number: 0,
      },
      {
        id: 56,
        name: "Mega Yatch",
        price: "300,000,000",
        imageUrl: "/assets/images/image57.jpg",
        number: 0,
      },
    ]

  }

  handleBuy = (index) => {
    let sumDamua =this.state.damua
    // this.state.products.map((e,i)=> sumDamua = Number(this.state.products[i].price) * Number(this.state.products[i].number)
    // )
    let newProduc = this.state.products
    newProduc[index].number = newProduc[index].number + 1
    this.setState({
      products: [...newProduc],
      disabled: '',
      total: this.state.total - parseFloat(newProduc[index].price.replace(/,/g,"")),
    },()=>{
      this.setState({
        percent: (217000000 - this.state.total)/ 217000000
      })

    })

  };
  handleSell = (index) => {
    let newProduc = this.state.products
    if (newProduc[index].number > 0) {
      newProduc[index].number = newProduc[index].number - 1
      this.setState({
        products: [...newProduc],
        total: Number(this.state.total) + parseFloat(newProduc[index].price.replace(/,/g,"")),
        disabled: ''
      },()=>{
        this.setState({
          percent: (217000000 - this.state.total)/ 217000000
        })
      })
    } else {
      this.setState({ disabled: '1' })
    }
  }
  render() {
    let { products } = this.state
    return (
      <div >
        <Navbar total={this.state.total} percent={this.state.percent}/>
        <div className='app-container'>
          {
            products.map((e, i) => (
              <Products handleBuy={() => this.handleBuy(i)} disabled={this.state.disabled} handleSell={() => this.handleSell(i)} element={e} key={i}></Products>
            ))
          }
        </div>

      </div>);
  }
}

export default App;