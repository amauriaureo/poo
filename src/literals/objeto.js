function convertToCurrency(value){
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)
}
// formatar para o real br: convertToCurrency

const Produto = {
    id: 1,
    name: "Iphone 12",
    price: 8000,
    discount: 5,
    description: {
        features: "touch screen"
    },
    getDiscount: function(){
        return (this.price * this.discount) / 100
        //'this' é uma palavra reservada do js onde o obj referencia ele mesmo
    },
    getFinalPrice: function(){
        return convertToCurrency(this.price - this.getDiscount()) 
    }
}

// Produto.price = 10000

module.exports = Produto