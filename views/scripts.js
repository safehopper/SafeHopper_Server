console.log("CONNECTED");

// function initMap() {
//     console.log("INIT MAP");
//     // Reload map every 5 seconds
//     setTimeout(function(){ initMap(); }, 5000);

//     var image = 'https://lh3.googleusercontent.com/cZyp1zTcrie_O08x1fFT6i8nIwbCUK7hwfB4VxqYNQ6VGEyKq2WdWLfEP_OnkB4byEKFp_qg2L6sbkiL9zKJtlGG4yGSGFhVtkAdM6AD90e5AgScn18OYDzAshJAZ-11NugfYnnmqsc9F82eWbb_mQLWx45uQp_gw3EMM_oK7aFyjCvDLxr3m593xsMaXi_vR--N5vfoZCULRZDPixzf6dRkpxfqDXz7ufpKsK9M_AC1WXhdC-vu6wC7CGNEN3aDj_coOb3eHsvIDZcpm4uwn1Cs3xJur-2juvOrCTJIsSrU1xOKpkscBt6Gs7Ecqe33idvtCXF8mJZc0B_UhEMdpRVTE4ZPD-EGzqmhZfMVcCNOyKrwDiWIWHiXlVwZsY24mbWcAj7VeACj996lm6PXxcQoXib4aKE4wX8nfprz4dGcwHL43p3ARSw_PIibbDk0hMbFtutpoDMxGpaKUswqVEXKnK4rIQddnIsufNnE5Nd7mjN7Uj-WybEPuI3Fe7hoppvL77ALaBPQCH7lG-oNpMxobnVECl2vq1tJBh5ZwtlAqxGRz9aH9qziAcsu1L4-kZb0cEjYgsXg8L4lQ0GNEJT-HWnIoyjRtn5-PmhInZPEvP0WZFRztZ_JE1qlHfGfrp4DG9nngF99fvI-fK7AqyVGgpYQRNOYuhgLfAStoNINenPjS3zqIQ=s10-no';  // The location of Uluru
//     var uluru = [{lat: 33.7838, lng: -118.1141}, {lat: 33.7837, lng: -118.1140}, {lat: 33.7836, lng: -118.1139}, {lat: 33.7835, lng: -118.1137},{lat: 33.7834, lng: -118.1136},{lat: 33.7833, lng: -118.1135}];
//     // The map, centered at Uluru

//     console.log(window.location.pathname);
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 15, center: uluru[0]});
//     // The marker, positioned at Uluru
//     new google.maps.Marker({position: uluru[0], map: map});
//     new google.maps.Marker({position: uluru[1], map: map, icon: image});
//     new google.maps.Marker({position: uluru[2], map: map, icon: image});
//     new google.maps.Marker({position: uluru[3], map: map, icon: image});
//     new google.maps.Marker({position: uluru[4], map: map, icon: image});
//     new google.maps.Marker({position: uluru[5], map: map, icon: image});
//   }