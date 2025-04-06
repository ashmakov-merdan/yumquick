type TimeGreeting = {
  title: string
  description: string
}

const greeting = (): TimeGreeting => {
  const hour = new Date().getHours();

  if(hour >= 5 && hour < 12){
    return {
      title: "Good Morning",
      description: "Rise and shine! It's breakfast time."
    }
  } else if(hour >= 12 && hour < 17){
    return {
      title: "Good Afternoon",
      description: "Midday treat? It's time to eat!"
    }
  } else if (hour >= 17 && hour < 21){
    return {
      title: "Good Evening",
      description: "Dinner's near, bring flavors here!"
    }
  } else {
    return {
      title: "Good Night",
      description: "Late-night bite? Feels just right!"
    }
  }
};

export default greeting;