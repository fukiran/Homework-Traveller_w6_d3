const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const starts = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return starts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const ends = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return ends;
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
