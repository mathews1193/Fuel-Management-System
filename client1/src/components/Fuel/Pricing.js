class Pricing {
    constructor(gallonsRequested, status, state) 
    { 
      this.gallonsRequested = gallonsRequested;
      this.status = status;
      this.state = state; 
    }

    // determine rate history based on user buying history
    getRateHistory(){
      var rateHistory;

      if (this.status === true)
      {
        rateHistory = .01;
      } else {
        rateHistory = 0;
      }
      console.log(rateHistory);
      return rateHistory;
    }

    // determine location factor based on in state or out of state location
    getLocationFactor(){ 
      var locationFactor;

      if (this.state === "TX")
      {
         locationFactor = .02;
      } else{
          locationFactor = 0.04;
      }
      console.log(locationFactor);
      return locationFactor;
    }

    // determine gallon factor based on the amount the user purchases
    getGallonFactor(){
      var gallonFactor;

      if (this.gallonsRequested > 1000)
      {
          gallonFactor = .02;
      } else {
          gallonFactor = 0.03;
      }
      console.log(gallonFactor);
      return gallonFactor;
    }

    // calculate price per gallon for client 
    getPrice(){
      var currentPrice = 1.50;
      var companyProfit = .1;

      this.suggestedPrice = ((this.getLocationFactor() - this.getRateHistory() + this.getGallonFactor() + companyProfit) 
      * currentPrice);
      this.suggestedPrice = currentPrice + this.suggestedPrice;
      return this.suggestedPrice;
    }
     // calculate total amount using gallons requested and setprice per gallon
     getAmount(){ 
      var totalAmount = (this.gallonsRequested * this.getPrice());

      return totalAmount;
    }

  }
  module.exports = Pricing;