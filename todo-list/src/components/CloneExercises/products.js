const products = [
    {
      name:'OnePlus 1+',
      brandName: 'OnePlus',
      price: 12000,
      features: {
        color: ['blue', 'red', 'black'],
        ram: '4GB',
        camera: '20 mp'
      }
    },
    {
      name:'OnePlus 10r+',
      brandName: 'OnePlus',
      price: 32000,
      features: {
        color: ['blue', 'red', 'black'],
        ram: '16GB',
        camera: '50 mp'
      }
    }
  ]
  
  const updateProducts = [...products];
  // updateProducts[1] = {...updateProducts[1]};
  // const features = {...updateProducts[1].features };
  // const color = features.color;
  // const colorClone = [...color];
  // colorClone.push('green');
  // features.color = colorClone
  // updateProducts[1].features = features;
  
  updateProducts[1] = {
    ...updateProducts[1], 
    features: {
      ...updateProducts[1].features,
      color:[
        ...updateProducts[1].features.color,
        'yellow'
      ]
    }
  };
  
  console.log(products[1].features.color);
  console.log(updateProducts[1].features.color);
  
  console.log(products[0] === updateProducts[0],  'should be true');