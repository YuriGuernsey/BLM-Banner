# BLM-Banner
## This project is open source, so feel free to improve it, and request features you would like to see
![Visitor Count](https://profile-counter.glitch.me/YuriGuernsey/count.svg)
To add banner to page, add the following:
```
<script type="text/javascript" src="https://blmbanner.netlify.app/BLM.js">
  <script>
  /* if jQueryEnabled is true. it will render jquery (have it disabled if you have jQuery on page already) */
  jQueryEnabled = true;
  /*  BannerType lets you choose how the banner is displayed. The different types of banners are: 
  "insertToTop"
  "insertToBottom"
  "popUpModel"
  "sideWindowLeftTop"
  "sideWindowLeftBottom"
  "sideWindowRightTop"
  "sideWindowRightBottom"
  */
  BannerType = "insertToTop";
  /* bckColor set the background colour for the Banner, if nothing is set, the default colour is black */
  bckColor = "#fff";
  /* fontColor set the colour for the Banner text, if nothing is set, the default colour is white */
  fontColor = "#000";
  /* fontSize sets the size for the banner text, if nothing is set, the default size is 1.3em */
  fontSize = "20px";
  
  /* buttonColors sets the background and text color for the buttton, if nothing is set, the default colours are "#fff","#000" */
  buttonColors = [
        "#000",
        "#fff"
    ];
    
    /* exitTF sets if the close button is displayed */
    exitTF = true;
  
  /* linkToDonate is the link that the button holds in the banner. The default link is https://secure.actblue.com/donate/ms_blm_homepage_2019 */
  linkToDonate = "randomlink.com/donate";
  
  /* text is the text that is displayed on the banner. The default text is #BLACKLIVESMATTER */
  text = "Donate to support the BLM Movement"
  
  /* buttonText is the text that is displayed on the button in the banner. The default buttonText is #SUPPORT */
  buttonText = "Support #BLM"
       
    </script>
```
