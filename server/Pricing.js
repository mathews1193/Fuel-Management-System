class pricing {
    constructor(suggestedPrice, totalAmount, gallonsRequested, customerStatus, state) 
    {
      this.customerStatus = customerStatus;
      this.suggestedPrice = suggestedPrice;
      this.totalAmount = totalAmount;
      this.gallonsRequested = gallonsRequested;
      this.state = state; 
    }
    
     setAmount(){ 
      totalAmount = (gallonsRequested * setPrice);
      return totalAmount
    }
    setRateHistory(){
      var rateHistory;

      if (customerStatus == true)
      {
        rateHistory = 0.01;
      } else {
        rateHistory = 0;
      }
      return rateHistory;
    }

    setLocationFactor(){ 
      var locationFactor;

      if (state == "TX")
      {
         locationFactor = 0.02;
      } else{
          locationFactor = 0.04;
      }
      return locationFactor;
    }

    setGallonFactor(){
      var gallonFactor;

      if (gallonsRequested > 1000)
      {
          gallonFactor = 0.02;
      } else {
          gallonFactor = 0.03;
      }
      return gallonFactor;
    }

    setPrice(){
      var currentPrice = 1.50;
      var companyProfit = 0.10;

      suggestedPrice = (currentPrice * setLocationFactor() - companyProfit + setGallonFactor() + setRateHistory());
      return suggestedPrice;
    }

  }