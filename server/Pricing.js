class Pricing {
    constructor(suggestedPrice, gallonsRequested, status, state) 
    { 
      this.suggestedPrice = suggestedPrice;
      this.gallonsRequested = gallonsRequested;
      this.status = status;
      this.state = state; 
    }
    
    // calculate total amount using gallons requested and setprice per gallon
    getAmount(){ 
      var totalAmount = (this.gallonsRequested * this.suggestedPrice);
      return totalAmount;
    }

    // determine rate history based on user buying history
    getRateHistory(){
      var rateHistory;

      if (this.status === true)
      {
        rateHistory = 0.01;
      } else {
        rateHistory = 0;
      }
      return rateHistory;
    }

    // determine location factor based on in state or out of state location
    getLocationFactor(){ 
      var locationFactor;

      if (this.state === "TX")
      {
         locationFactor = 0.02;
      } else{
          locationFactor = 0.04;
      }
      return locationFactor;
    }

    // determine gallon factor based on the amount the user purchases
    getGallonFactor(){
      var gallonFactor;

      if (this.gallonsRequested > 1000)
      {
          gallonFactor = 0.02;
      } else {
          gallonFactor = 0.03;
      }
      return gallonFactor;
    }

    // calculate price per gallon for client 
    getPrice(){
      var currentPrice = 1.50;
      var companyProfit = 0.10;

      this.suggestedPrice = (currentPrice * getLocationFactor() - 
      companyProfit + getGallonFactor() + getRateHistory());

      return this.suggestedPrice;
    }

  }