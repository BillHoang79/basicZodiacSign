var userArray = [
	{
		zodiacSign: "aries", 
		attributes: "You're: independent, generous, optimistic, enthusiastic, courageous",
		image: "img/aries.png"
	},
	{
		zodiacSign: "leo",
		attributes: "You're: confident, ambitious, generous, loyal, encouraging",
		image: "img/leo.jpg"
	},
	{
		zodiacSign: "cancer",
		attributes: "You're: loyal, dependable, caring, adaptable, responsive",
		image: "img/cancer.jpg"
	},
	{
		zodiacSign: "libra",
		attributes: "You're: diplomatic, graceful, peaceful, idealistic, hospitable",
		image: "img/libra.jpg"
	},
	{
		zodiacSign: "pisces",
		attributes: "You're: compassionate, adaptable, accepting, devoted, imaginative",
		image: "img/pisces.jpg"
	},
	{
		zodiacSign: "taurus",
		attributes: "You're: dependable, persistent, loyal, patient, generous",
		image: "img/taurus.jpg"
	},
	{
		zodiacSign: "gemini",
		attributes: "You're: energetic, clever, imaginative, witty, adaptable",
		image: "img/gemini.jpg"
	},
	{
		zodiacSign: "virgo",
		attributes: "You're: analytical, obervant, helpful, reliable, precise",
		image: "img/virgo.jpg"
	},
	{
		zodiacSign: "scorpio",
		attributes: "You're: loyal, passionate, resourceful, obervant, dynamic",
		image: "img/scorpio.jpg"
	},
	{
		zodiacSign: "sagittirius",
		attributes: "generous, idealistic, great sense of humor, independent",
		image: "img/sagittirius.jpg"
	},
	{
		zodiacSign: "capricorn",
		attributes: "responsible, patient, ambitious, resourceful, loyal",
		image: "img/capricorn.jpg"
	},
	{
		zodiacSign: "aquarius",
		attributes: "witty, clever, humanitarian, inventive, original",
		image: "img/aquarius.jpg"
	},
	
]

function getInfo(){
	//asigns what the user type in the var userInput
	var userInput = document.getElementById("zodiacSign").value.toLowerCase()
	//checks what user types in to match arguements by looping through the array
	for(i = 0; i < userArray.length; i++){
		if(userInput === userArray[i].zodiacSign){
			//checks to see if userInput matches array names
			document.getElementById("zodiac").innerHTML = userArray[i].zodiacSign
			//stores matching zodiac image
			document.getElementById("zodiacImg").src = userArray[i].image
			document.getElementById("horoscope").innerHTML = userArray[i].attributes
			return
		} else {
			//if no matches are found in array this will appear
			document.getElementById("zodiac").innerHTML ="Zodiac not found!!"
		}   

	}
}
