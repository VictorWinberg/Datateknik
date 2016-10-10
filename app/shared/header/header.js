angular.module('header', []).
  controller('HeaderController', function($scope) {
    $scope.logopath = 'assets/img/dseklogo.svg';
    $scope.dropdowns =
    [
      {title: 'Aktuellt', items: [
        {title: 'Nyheter', href: 'nyheter'},
        {title: 'Kalender', href: 'kalender'},
        {title: 'Eventanmälan', href: 'eventanmälan'}]},
      {title: 'Community', items: [
        {title: 'Anslut', href: 'anslut'}]},
      {title: 'För funktionärer', items: [
        {title: 'STAB16', href: 'stab16'}]},
      {title: 'Sektionen', items: [
        {title: 'Om sektionen', href: 'sektionen'},
        '-',
        {title: 'Swagtest', href: 'swagtest'}]},
      {title: 'För företag', href: 'foretag'}
    ];
});
