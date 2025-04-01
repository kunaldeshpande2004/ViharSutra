const places = [
  {
    city: "Delhi",
    days: "3-4 Days",
    placesToVisit: [
      { name: "India Gate", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/India_Gate_600x400.jpg" },
      { name: "Red Fort", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Red_Fort%2C_Delhi%2C_India.jpg" },
      { name: "Qutub Minar", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Qutb_minar.jpg" },
      { name: "Lotus Temple", image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Lotus_temple_%28Delhi%29.jpg" },
      { name: "Akshardham Temple", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Akshardham_Temple%2C_Delhi.jpg" },
      { name: "Humayun's Tomb", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Humayun%27s_Tomb%2C_Delhi.jpg" }
    ]
  },
  {
    city: "Mumbai",
    days: "3-5 Days",
    placesToVisit: [
      { name: "Gateway of India", image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Gateway_of_India_at_night.jpg" },
      { name: "Marine Drive", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Marine_Drive%2C_Mumbai.jpg" },
      { name: "Elephanta Caves", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Elephanta_Caves.jpg" },
      { name: "Haji Ali Dargah", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Haji_Ali_Dargah.jpg" },
      { name: "Siddhivinayak Temple", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Siddhivinayak_Temple%2C_Mumbai.jpg" },
      { name: "Juhu Beach", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Juhu_Beach%2C_Mumbai.jpg" }
    ]
  },
  {
    city: "Agra",
    days: "2-3 Days",
    placesToVisit: [
      { name: "Taj Mahal", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg" },
      { name: "Agra Fort", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Agra_Fort.jpg" },
      { name: "Fatehpur Sikri", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fatehpur_Sikri%2C_India.jpg" },
      { name: "Mehtab Bagh", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Mehtab_Bagh%2C_Agra.jpg" },
      { name: "Itmad-ud-Daulah’s Tomb", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Itmad-ud-Daulah%27s_Tomb%2C_Agra.jpg" }
    ]
  },
  {
    city: "Jaipur",
    days: "3-4 Days",
    placesToVisit: [
      { name: "Amber Fort", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Amber_Fort%2C_Jaipur.jpg" },
      { name: "Hawa Mahal", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hawa_Mahal%2C_Jaipur.jpg" },
      { name: "City Palace", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/City_Palace%2C_Jaipur.jpg" },
      { name: "Jantar Mantar", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Jantar_Mantar%2C_Jaipur.jpg" },
      { name: "Nahargarh Fort", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Nahargarh_Fort%2C_Jaipur.jpg" },
      { name: "Jal Mahal", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Jal_Mahal%2C_Jaipur.jpg" }
    ]
  },
  {
    city: "Indore",
    days: "2-3 Days",
    placesToVisit: [
      { name: "Rajwada Palace", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rajwada_Palace%2C_Indore.jpg" },
      { name: "Lal Bagh Palace", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Lal_Bagh_Palace%2C_Indore.jpg" },
      { name: "Sarafa Bazaar", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sarafa_Bazaar%2C_Indore.jpg" },
      { name: "Kanch Mandir", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Kanch_Mandir%2C_Indore.jpg" },
      { name: "Patalpani Waterfall", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Patalpani_Waterfall%2C_Indore.jpg" }
    ]
  },
  {
    city: "Varanasi",
    days: "3-4 Days",
    placesToVisit: [
      { name: "Dashashwamedh Ghat", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dashashwamedh_Ghat%2C_Varanasi.jpg" },
      { name: "Kashi Vishwanath Temple", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Kashi_Vishwanath_Temple%2C_Varanasi.jpg" },
      { name: "Manikarnika Ghat", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Manikarnika_Ghat%2C_Varanasi.jpg" },
      { name: "Sarnath", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sarnath%2C_Varanasi.jpg" },
      { name: "Banaras Hindu University", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Banaras_Hindu_University%2C_Varanasi.jpg" }
    ]
  },
  {
    city: "Kolkata",
    days: "3-4 Days",
    placesToVisit: [
      { name: "Victoria Memorial", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Victoria_Memorial%2C_Kolkata.jpg" },
      { name: "Howrah Bridge", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Howrah_Bridge%2C_Kolkata.jpg" },
      { name: "Dakshineswar Kali Temple", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dakshineswar_Kali_Temple%2C_Kolkata.jpg" },
      { name: "Science City", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Science_City%2C_Kolkata.jpg" },
      { name: "Eden Gardens", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Eden_Gardens%2C_Kolkata.jpg" }
    ]
  },
];

// const places = [
//     {
//       city: "Delhi",
//       days: "3-4 Days",
//       placesToVisit: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Akshardham Temple", "Humayun's Tomb"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/India_Gate_in_New_Delhi_03-2016_img3.jpg"
//     },
//     {
//       city: "Mumbai",
//       days: "3-5 Days",
//       placesToVisit: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Haji Ali Dargah", "Siddhivinayak Temple", "Juhu Beach"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gateway_of_India.jpg"
//     },
//     {
//       city: "Agra",
//       days: "2-3 Days",
//       placesToVisit: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itmad-ud-Daulah’s Tomb"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Taj_Mahal_India.jpg"
//     },
//     {
//       city: "Jaipur",
//       days: "3-4 Days",
//       placesToVisit: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jal Mahal"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Hawa_Mahal_2011.jpg"
//     },
//     {
//       city: "Indore",
//       days: "2-3 Days",
//       placesToVisit: ["Rajwada Palace", "Lal Bagh Palace", "Sarafa Bazaar", "Kanch Mandir", "Patalpani Waterfall"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Rajwada_Indore.jpg"
//     },
//     {
//       city: "Varanasi",
//       days: "3-4 Days",
//       placesToVisit: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Manikarnika Ghat", "Sarnath", "Banaras Hindu University"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Varanasi_Ghat.jpg"
//     },
//     {
//       city: "Kolkata",
//       days: "3-4 Days",
//       placesToVisit: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Science City", "Eden Gardens"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Victoria_Memorial%2C_Kolkata.jpg"
//     },
//     {
//       city: "Bangalore",
//       days: "3-4 Days",
//       placesToVisit: ["Lalbagh Botanical Garden", "Bangalore Palace", "Cubbon Park", "UB City Mall", "ISKCON Temple"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Bangalore_Palace_02.jpg"
//     },
//     {
//       city: "Hyderabad",
//       days: "3-4 Days",
//       placesToVisit: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar Lake", "Salar Jung Museum"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Charminar_Hyderabad_2019.jpg"
//     },
//     {
//       city: "Chennai",
//       days: "3-4 Days",
//       placesToVisit: ["Marina Beach", "Kapaleeshwarar Temple", "Santhome Basilica", "Fort St. George", "VGP Golden Beach"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Marina_Beach_Chennai.jpg"
//     },
//     {
//       city: "Pune",
//       days: "2-3 Days",
//       placesToVisit: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Pataleshwar Cave Temple"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Shaniwar_Wada_Pune.jpg"
//     },
//     {
//       city: "Ahmedabad",
//       days: "3 Days",
//       placesToVisit: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell", "Sidi Saiyyed Mosque"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sabarmati_Ashram_Main_Building.jpg"
//     },
//     {
//       city: "Udaipur",
//       days: "3-4 Days",
//       placesToVisit: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Udaipur_City_Palace.jpg"
//     },
//     {
//       city: "Shimla",
//       days: "2-3 Days",
//       placesToVisit: ["Kufri", "Mall Road", "Jakhoo Temple", "Christ Church"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Shimla_Mall_Road.jpg"
//     },
//     {
//       city: "Manali",
//       days: "3-4 Days",
//       placesToVisit: ["Solang Valley", "Rohtang Pass", "Hidimba Devi Temple", "Manu Temple"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Rohtang_Pass_Manali.jpg"
//     },
//     {
//       city: "Goa",
//       days: "4-5 Days",
//       placesToVisit: ["Baga Beach", "Dudhsagar Waterfalls", "Aguada Fort", "Basilica of Bom Jesus"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Baga_Beach_Goa.jpg"
//     },
//     {
//       city: "Mysore",
//       days: "2-3 Days",
//       placesToVisit: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Cathedral"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mysore_Palace.jpg"
//     },
//     {
//       city: "Rishikesh",
//       days: "2-3 Days",
//       placesToVisit: ["Lakshman Jhula", "Triveni Ghat", "Neelkanth Mahadev Temple", "Parmarth Niketan"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Laxman_Jhula_Rishikesh.jpg"
//     },
//     {
//       city: "Kochi",
//       days: "3 Days",
//       placesToVisit: ["Fort Kochi", "Marine Drive", "Mattancherry Palace", "Cherai Beach"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Fort_Kochi_Beach.jpg"
//     },
//     {
//       city: "Jodhpur",
//       days: "3 Days",
//       placesToVisit: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", "Mandore Gardens"],
//       image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Mehrangarh_Fort_Jodhpur.jpg"
//     }
//   ];
  
  export default places;