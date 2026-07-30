const data = [
  {
    phase:1, week:1, title:"JavaScript basics", lang:"JS",
    goal:"Write small JS programs confidently from scratch",
    days:[
      {day:"Day 1", tasks:[
        {t:"Install VS Code and Node.js on your computer",tag:"js"},
        {t:"Learn: variables (let, const) and data types",tag:"js"},
        {t:"Practice: declare 10 variables describing a ride trip",tag:"js"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Learn: if / else conditions and comparison operators",tag:"js"},
        {t:"Learn: for loops and while loops",tag:"js"},
        {t:"Practice: write a loop that prints fare for 1km to 20km",tag:"js"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Learn: functions — how to write and call them",tag:"js"},
        {t:"Practice: write a calcFare(distance, ratePerKm) function",tag:"js"},
        {t:"Practice: write a function that returns driver rating average",tag:"js"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Learn: arrays — creating, looping, push/pop/filter/map",tag:"js"},
        {t:"Learn: objects — key/value pairs, accessing properties",tag:"js"},
        {t:"Practice: create an array of 5 driver objects with name, rating, car",tag:"js"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Learn: ES6 features — arrow functions, template literals",tag:"js"},
        {t:"Learn: destructuring and spread operator",tag:"js"},
        {t:"Mini project: fare calculator script in Node.js — runs in terminal",tag:"js"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Review and redo any exercises you found hard",tag:"js"},
        {t:"Watch: JavaScript crash course on YouTube (freeCodeCamp)",tag:"js"}
      ]}
    ]
  },
  {
    phase:1, week:2, title:"React fundamentals", lang:"JS",
    goal:"Build and understand UI components using React",
    days:[
      {day:"Day 1", tasks:[
        {t:"Learn: what is React and why components matter",tag:"rn"},
        {t:"Learn: JSX — writing HTML inside JavaScript",tag:"rn"},
        {t:"Practice: create a RiderCard component showing name and rating",tag:"rn"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Learn: props — passing data between components",tag:"rn"},
        {t:"Practice: make RiderCard accept name, rating, photo as props",tag:"rn"},
        {t:"Practice: render a list of 3 different RiderCards",tag:"rn"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Learn: state with useState hook",tag:"rn"},
        {t:"Practice: build a counter app that increments and resets",tag:"rn"},
        {t:"Practice: build a toggle button that shows/hides a panel",tag:"rn"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Learn: useEffect hook — running code when screen loads",tag:"rn"},
        {t:"Practice: fetch public JSON data and display it on screen",tag:"rn"},
        {t:"Learn: conditional rendering — show A or B based on state",tag:"rn"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Mini project: Rider profile page with editable name field",tag:"rn"},
        {t:"Mini project: Trip history list showing 5 fake past rides",tag:"rn"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Resource: read react.dev tutorial — Tic-Tac-Toe walkthrough",tag:"rn"},
        {t:"Rebuild one mini project from memory without looking at notes",tag:"rn"}
      ]}
    ]
  },
  {
    phase:1, week:3, title:"React Native + Expo setup", lang:"RN",
    goal:"See YOUR app running live on your real phone",
    days:[
      {day:"Day 1", tasks:[
        {t:"Install Expo CLI: run npx create-expo-app RideApp",tag:"rn"},
        {t:"Install Expo Go app on your Android or iPhone",tag:"rn"},
        {t:"Run the app: npx expo start — scan QR code on your phone",tag:"rn"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Learn: View, Text, StyleSheet — the 3 core RN building blocks",tag:"rn"},
        {t:"Learn: Flexbox layout in React Native (different from CSS)",tag:"rn"},
        {t:"Practice: build a simple Home screen with your app name",tag:"rn"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Learn: TouchableOpacity and Pressable for tap interactions",tag:"rn"},
        {t:"Learn: TextInput for forms and user input fields",tag:"rn"},
        {t:"Practice: build a login form UI (no logic yet, just the look)",tag:"rn"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Learn: ScrollView and FlatList for scrollable content",tag:"rn"},
        {t:"Practice: build a scrollable list of 10 fake nearby drivers",tag:"rn"},
        {t:"Learn: Image component — show a profile photo from URL",tag:"rn"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Mini project: Home screen with a 'Request Ride' button",tag:"rn"},
        {t:"Add a FlatList of nearby drivers below the button",tag:"rn"},
        {t:"Style everything to look clean and readable",tag:"ui"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Explore Expo docs: expo.dev — read about available device APIs",tag:"rn"},
        {t:"Try: access your phone's camera using Expo Camera package",tag:"rn"}
      ]}
    ]
  },
  {
    phase:2, week:4, title:"Navigation — all screens", lang:"RN",
    goal:"All app screens linked together — full navigation flow",
    days:[
      {day:"Day 1", tasks:[
        {t:"Install React Navigation: npm install @react-navigation/native",tag:"rn"},
        {t:"Learn: Stack Navigator — screens stacked like pages",tag:"rn"},
        {t:"Create: App.js with a basic stack of 2 screens",tag:"rn"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Create screen files: HomeScreen.js, LoginScreen.js, SignupScreen.js",tag:"rn"},
        {t:"Link them in navigation — user can move between screens",tag:"rn"},
        {t:"Learn: how to pass data (params) between screens",tag:"rn"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Create: RideRequestScreen.js and DriverHomeScreen.js",tag:"rn"},
        {t:"Create: TripHistoryScreen.js and ProfileScreen.js",tag:"rn"},
        {t:"Add a bottom Tab Navigator for main screens",tag:"rn"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Create: separate navigator for Rider flow and Driver flow",tag:"rn"},
        {t:"Add a conditional: if user is driver, show driver tabs",tag:"rn"},
        {t:"Polish headers and tab bar icons using Expo vector icons",tag:"ui"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Test full navigation on your phone — tap through every screen",tag:"rn"},
        {t:"Fix any broken navigation or layout issues found",tag:"rn"},
        {t:"Add placeholder content to every screen so it looks real",tag:"ui"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Draw your navigation map on paper — every screen and connection",tag:"rn"},
        {t:"Show the app to a friend and get their first impressions",tag:"ui"}
      ]}
    ]
  },
  {
    phase:2, week:5, title:"Firebase auth — login system", lang:"FB",
    goal:"Real users can register and log in to your app",
    days:[
      {day:"Day 1", tasks:[
        {t:"Go to firebase.google.com — create your RideApp project",tag:"fb"},
        {t:"Enable Authentication → Email/Password in Firebase console",tag:"fb"},
        {t:"Install Firebase SDK: npm install firebase",tag:"fb"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Create firebase.js config file with your project credentials",tag:"fb"},
        {t:"Learn: createUserWithEmailAndPassword function",tag:"fb"},
        {t:"Wire up Sign Up screen — new accounts created in Firebase",tag:"fb"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Learn: signInWithEmailAndPassword function",tag:"fb"},
        {t:"Wire up Login screen — existing users can sign in",tag:"fb"},
        {t:"Add error handling — show message if password is wrong",tag:"fb"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Learn: onAuthStateChanged — detect if user is logged in",tag:"fb"},
        {t:"Auto-redirect: logged-in users go to Home, others go to Login",tag:"fb"},
        {t:"Add a Logout button that signs the user out",tag:"fb"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Enable Phone Number authentication in Firebase console",tag:"fb"},
        {t:"Add phone login option to Login screen (SMS verification)",tag:"fb"},
        {t:"Test: create 3 test accounts — 2 riders, 1 driver",tag:"fb"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Add a 'Forgot password' screen that emails a reset link",tag:"fb"},
        {t:"Read Firebase Auth docs — learn about user object properties",tag:"fb"}
      ]}
    ]
  },
  {
    phase:2, week:6, title:"Firestore database", lang:"FB",
    goal:"User data saved to the cloud and loaded on every open",
    days:[
      {day:"Day 1", tasks:[
        {t:"Enable Firestore in Firebase console (start in test mode)",tag:"fb"},
        {t:"Learn: collections, documents, and fields — how data is structured",tag:"fb"},
        {t:"Create a users collection manually in the Firebase console",tag:"fb"}
      ]},
      {day:"Day 2", tasks:[
        {t:"On sign up: save user profile to Firestore automatically",tag:"fb"},
        {t:"Fields to save: uid, name, email, role (rider/driver), createdAt",tag:"fb"},
        {t:"Test: sign up and check the data appears in Firebase console",tag:"fb"}
      ]},
      {day:"Day 3", tasks:[
        {t:"On app open: read user profile from Firestore",tag:"fb"},
        {t:"Display name and role on the Profile screen from live data",tag:"fb"},
        {t:"Learn: Firestore real-time listener with onSnapshot",tag:"fb"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Build: Edit Profile screen — user can update their name",tag:"fb"},
        {t:"For drivers: add vehicle make, model, plate number fields",tag:"fb"},
        {t:"Save edits back to Firestore with updateDoc",tag:"fb"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Create a trips collection in Firestore",tag:"fb"},
        {t:"Structure a trip document: riderId, driverId, status, pickup, dropoff",tag:"fb"},
        {t:"Show Trip History screen reading from the trips collection",tag:"fb"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Learn Firestore security rules — prevent strangers reading your data",tag:"fb"},
        {t:"Update rules so users can only read/write their own documents",tag:"fb"}
      ]}
    ]
  },
  {
    phase:3, week:7, title:"Maps and live location", lang:"MAPS",
    goal:"Interactive map showing your real GPS location",
    days:[
      {day:"Day 1", tasks:[
        {t:"Install: npx expo install react-native-maps",tag:"maps"},
        {t:"Get a Google Maps API key from console.cloud.google.com (free tier)",tag:"maps"},
        {t:"Add MapView to your Home screen — a real map appears",tag:"maps"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Install: npx expo install expo-location",tag:"maps"},
        {t:"Request location permission from the user on app open",tag:"maps"},
        {t:"Get device GPS coordinates and log them in console",tag:"maps"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Show user's current location as a blue dot on the map",tag:"maps"},
        {t:"Auto-center the map on the user's GPS position",tag:"maps"},
        {t:"Add a Marker component with a custom rider icon",tag:"maps"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Add a search bar for destination using Google Places Autocomplete",tag:"maps"},
        {t:"Show the chosen destination as a second pin on the map",tag:"maps"},
        {t:"Draw a line (Polyline) between pickup and destination",tag:"maps"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Calculate and display trip distance in km",tag:"maps"},
        {t:"Show estimated fare based on distance × rate",tag:"maps"},
        {t:"Mini project: fully working map screen with pickup + dropoff",tag:"maps"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Explore Google Directions API — get actual road route",tag:"maps"},
        {t:"Draw the real road path instead of a straight line",tag:"maps"}
      ]}
    ]
  },
  {
    phase:3, week:8, title:"Ride request system", lang:"FB",
    goal:"Rider requests a ride — driver sees it instantly",
    days:[
      {day:"Day 1", tasks:[
        {t:"Design trip document structure: pickup coords, dropoff, status, timestamp",tag:"fb"},
        {t:"'Request Ride' button creates a new document in Firestore trips collection",tag:"fb"},
        {t:"Set initial status to 'searching'",tag:"fb"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Driver screen: real-time listener shows incoming ride requests",tag:"fb"},
        {t:"Each request shows rider name, pickup location, estimated fare",tag:"fb"},
        {t:"Driver taps 'Accept' — updates trip status to 'accepted'",tag:"fb"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Rider screen: listens for status change — shows 'Driver found!'",tag:"fb"},
        {t:"Display the accepting driver's name, car, and rating to rider",tag:"fb"},
        {t:"Add a 'Cancel Ride' button for the rider before driver arrives",tag:"fb"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Handle edge cases: what if no driver accepts after 2 minutes?",tag:"fb"},
        {t:"Show a timeout message and let rider try again",tag:"fb"},
        {t:"Prevent two drivers from accepting the same ride",tag:"fb"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Full end-to-end test: use two phones simultaneously",tag:"fb"},
        {t:"Phone 1 = rider requesting, Phone 2 = driver accepting",tag:"fb"},
        {t:"Debug and fix everything that breaks during the test",tag:"fb"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Add trip status screen showing: searching → accepted → in progress → done",tag:"ui"},
        {t:"Make each status change animate smoothly on screen",tag:"ui"}
      ]}
    ]
  },
  {
    phase:3, week:9, title:"Live driver tracking", lang:"MAPS",
    goal:"Rider sees driver's car moving on the map in real time",
    days:[
      {day:"Day 1", tasks:[
        {t:"Driver app: start streaming GPS location to Firestore every 3 seconds",tag:"maps"},
        {t:"Save location as {lat, lng, timestamp} to the active trip document",tag:"maps"},
        {t:"Only stream when a trip is active — stop when trip ends",tag:"maps"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Rider app: listen to trip document for location updates",tag:"maps"},
        {t:"Move driver marker on the map each time location updates",tag:"maps"},
        {t:"Animate the marker movement smoothly",tag:"maps"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Calculate and display live ETA: distance ÷ average speed",tag:"maps"},
        {t:"Update ETA every 30 seconds as driver gets closer",tag:"maps"},
        {t:"Show 'Driver is X minutes away' text on rider's screen",tag:"maps"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Driver taps 'Start Trip' when rider gets in — status → in_progress",tag:"fb"},
        {t:"Rider's screen switches from 'waiting' to 'on trip' view",tag:"ui"},
        {t:"Driver taps 'End Trip' at destination — status → completed",tag:"fb"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Two-phone test: full trip from request to completion",tag:"maps"},
        {t:"Verify the moving car icon works smoothly with no lag",tag:"maps"},
        {t:"Fix GPS accuracy issues if the marker jumps around",tag:"maps"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Add a driver-side navigation mode showing turn-by-turn directions",tag:"maps"},
        {t:"Deep link to Google Maps app for actual navigation",tag:"maps"}
      ]}
    ]
  },
  {
    phase:4, week:10, title:"Payments + notifications", lang:"STRIPE",
    goal:"Rider pays automatically — both get push notifications",
    days:[
      {day:"Day 1", tasks:[
        {t:"Create a Stripe account at stripe.com (free)",tag:"rn"},
        {t:"Learn: how Stripe payment flow works — PaymentIntent",tag:"rn"},
        {t:"Set up a simple backend using Firebase Cloud Functions",tag:"fb"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Cloud Function: creates a PaymentIntent with the trip fare amount",tag:"fb"},
        {t:"Install @stripe/stripe-react-native in your Expo project",tag:"rn"},
        {t:"Add payment sheet UI — appears when trip ends",tag:"rn"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Rider enters card details → Stripe charges the fare amount",tag:"rn"},
        {t:"On success: update trip document with payment_status: paid",tag:"fb"},
        {t:"Test with Stripe's test card number: 4242 4242 4242 4242",tag:"rn"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Enable Firebase Cloud Messaging (FCM) in Firebase console",tag:"fb"},
        {t:"Install expo-notifications in your project",tag:"rn"},
        {t:"Request notification permissions from user on first open",tag:"rn"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Send notification to driver when rider requests a ride",tag:"fb"},
        {t:"Send notification to rider when driver accepts",tag:"fb"},
        {t:"Send 'Your driver is arriving' notification when driver is close",tag:"fb"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Test full payment flow end-to-end with test cards",tag:"rn"},
        {t:"Test all notifications trigger correctly on real devices",tag:"fb"}
      ]}
    ]
  },
  {
    phase:4, week:11, title:"Polish and testing", lang:"RN",
    goal:"Smooth, stable app with no crashes — ready to show users",
    days:[
      {day:"Day 1", tasks:[
        {t:"Add loading spinners to every screen that fetches data",tag:"ui"},
        {t:"Add error messages when network fails or data is missing",tag:"ui"},
        {t:"Add empty states: 'No trips yet' when history is empty",tag:"ui"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Test every screen on Android — fix layout issues",tag:"rn"},
        {t:"Test every screen on iPhone — fix any iOS-specific bugs",tag:"rn"},
        {t:"Test on a slow internet connection — does the app still work?",tag:"rn"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Add star rating screen after each completed trip",tag:"ui"},
        {t:"Save ratings to Firestore and calculate driver's average rating",tag:"fb"},
        {t:"Display average rating on driver profile card",tag:"ui"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Add a ride fare breakdown screen: base fare + distance charge + tax",tag:"ui"},
        {t:"Add a driver earnings screen showing today's total income",tag:"fb"},
        {t:"Let riders see their last 10 trips in Trip History",tag:"fb"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Give the app to 2-3 real people to test — watch them use it",tag:"ui"},
        {t:"Write down every bug or confusion they encounter",tag:"ui"},
        {t:"Fix the top 5 most critical issues found",tag:"rn"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Final polish: consistent colors, fonts, spacing across all screens",tag:"ui"},
        {t:"Add your app icon and splash screen using Expo app.json",tag:"rn"}
      ]}
    ]
  },
  {
    phase:4, week:12, title:"Launch to app stores", lang:"DEPLOY",
    goal:"Your app is live — anyone in the world can download it",
    days:[
      {day:"Day 1", tasks:[
        {t:"Write your app store listing: name, description, category",tag:"deploy"},
        {t:"Take 5 screenshots of your app on a phone for the store",tag:"deploy"},
        {t:"Write a short privacy policy (use a free generator online)",tag:"deploy"}
      ]},
      {day:"Day 2", tasks:[
        {t:"Install EAS CLI: npm install -g eas-cli",tag:"deploy"},
        {t:"Run: eas build --platform android — builds your .aab file",tag:"deploy"},
        {t:"This build runs in the cloud — takes about 15-20 minutes",tag:"deploy"}
      ]},
      {day:"Day 3", tasks:[
        {t:"Create Google Play developer account — pay $25 one-time fee",tag:"deploy"},
        {t:"Upload your .aab file to Google Play Console",tag:"deploy"},
        {t:"Submit for review — Android review takes 1-3 days",tag:"deploy"}
      ]},
      {day:"Day 4", tasks:[
        {t:"Run: eas build --platform ios — builds your .ipa file",tag:"deploy"},
        {t:"Create Apple developer account — pay $99/year fee",tag:"deploy"},
        {t:"Upload .ipa to App Store Connect using Transporter app",tag:"deploy"}
      ]},
      {day:"Day 5", tasks:[
        {t:"Submit iOS app for Apple review — takes 1-3 days",tag:"deploy"},
        {t:"Monitor review status in App Store Connect",tag:"deploy"},
        {t:"Once approved: share your app link with everyone you know!",tag:"deploy"}
      ]},
      {day:"Weekend", tasks:[
        {t:"Set up Firebase Analytics dashboard to track real users",tag:"fb"},
        {t:"Celebrate — you built and shipped a real app from scratch!",tag:"deploy"}
      ]}
    ]
  }
];

const tagColors = {
  js:     {bg:'#faeeda',color:'#633806',label:'JS'},
  rn:     {bg:'#e6f1fb',color:'#0c447c',label:'React Native'},
  fb:     {bg:'#fff3d6',color:'#633806',label:'Firebase'},
  maps:   {bg:'#eaf3de',color:'#27500a',label:'Maps'},
  ui:     {bg:'#fbeaf0',color:'#72243e',label:'UI'},
  deploy: {bg:'#eeedfe',color:'#3c3489',label:'Deploy'}
};

const state = {};
data.forEach(w => {
  w.days.forEach(d => {
    d.tasks.forEach((t,i) => {
      const key = `w${w.week}_${d.day}_${i}`;
      state[key] = false;
    });
  });
});

let currentPhase = 0;

function toggleTask(key, el) {
  state[key] = !state[key];
  const cb = el.querySelector('.task-cb');
  const txt = el.querySelector('.task-text');
  cb.classList.toggle('checked', state[key]);
  txt.classList.toggle('done', state[key]);
  updateProgress();
}

function updateProgress() {
  const keys = Object.keys(state);
  const done = keys.filter(k => state[k]).length;
  const pct = Math.round(done/keys.length*100);
  document.getElementById('overallPct').textContent = pct+'%';
  document.getElementById('overallBar').style.width = pct+'%';

  data.forEach(w => {
    const wKeys = Object.keys(state).filter(k => k.startsWith(`w${w.week}_`));
    const wDone = wKeys.filter(k => state[k]).length;
    const wPct = wKeys.length ? Math.round(wDone/wKeys.length*100) : 0;
    const fill = document.getElementById(`wfill${w.week}`);
    const pctEl = document.getElementById(`wpct${w.week}`);
    if(fill) fill.style.width = wPct+'%';
    if(pctEl) pctEl.textContent = wPct+'%';

    const numEl = document.getElementById(`wnum${w.week}`);
    if(numEl) {
      numEl.className = 'week-num ' + (wPct===100 ? 'wnum-done' : wPct>0 ? 'wnum-active' : 'wnum-todo');
    }
  });
}

function toggleWeek(week) {
  const body = document.getElementById(`wbody${week}`);
  const chev = document.getElementById(`wchev${week}`);
  const open = body.classList.toggle('open');
  chev.classList.toggle('open', open);
}

function filterPhase(phase) {
  currentPhase = phase;
  document.querySelectorAll('.phase-tab').forEach((t,i) => t.classList.toggle('active', i===phase));
  document.querySelectorAll('.week-card').forEach(card => {
    const p = parseInt(card.dataset.phase);
    card.style.display = (phase===0 || p===phase) ? 'block' : 'none';
  });
}

function renderWeeks() {
  const list = document.getElementById('weekList');
  list.innerHTML = data.map(w => {
    const days = w.days.map(d => {
      const tasks = d.tasks.map((t,i) => {
        const key = `w${w.week}_${d.day}_${i}`;
        const tc = tagColors[t.tag];
        return `<div class="task-item" onclick="toggleTask('${key}',this)">
          <div class="task-cb" id="cb_${key}"></div>
          <span class="task-text"><span class="tag" style="background:${tc.bg};color:${tc.color}">${tc.label}</span>${t.t}</span>
        </div>`;
      }).join('');
      return `<div class="day-section"><div class="day-label">${d.day}</div>${tasks}</div>`;
    }).join('');

    return `<div class="week-card" data-phase="${w.phase}">
      <div class="week-header" onclick="toggleWeek(${w.week})">
        <div class="wh-left">
          <div class="week-num wnum-todo" id="wnum${w.week}">W${w.week}</div>
          <div class="week-info">
            <div class="week-title-text">Week ${w.week}: ${w.title}</div>
            <div class="week-meta">Phase ${w.phase} &nbsp;·&nbsp; ${w.days.reduce((a,d)=>a+d.tasks.length,0)} tasks</div>
          </div>
        </div>
        <div class="wh-right">
          <span class="week-prog" id="wpct${w.week}">0%</span>
          <div class="mini-bar"><div class="mini-fill" id="wfill${w.week}" style="width:0%"></div></div>
          <span class="chevron" id="wchev${w.week}">▼</span>
        </div>
      </div>
      <div class="week-body" id="wbody${w.week}">
        ${days}
        <div class="week-goal"><strong>Week goal: </strong>${w.goal}</div>
      </div>
    </div>`;
  }).join('');
}

renderWeeks();
updateProgress();
