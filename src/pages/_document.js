import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
          href='https://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic'
          rel='stylesheet'
          type='text/css'
      />
      
      <link
          href="src/styles/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous"          
      />
      
      <link
          href='src/styles/style.css'
          rel='stylesheet'          
          crossOrigin="anonymous"          
      />      
      
      <script async src="js/common/modernizr.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        <script async src="js/common.js"/>
        <script async src="js/common/jquery-1.11.1.min.js"/>
        <script async src="js/common/bootstrap.min.js"/>
        <script async src="js/common/bootstrap-datepicker.js"/>
        <script async src="js/common/chosen.min.js"/>
        <script async src="js/common/bootstrap-checkbox.js"/>
        <script async src="js/common/nice-scroll.js"/>
        <script async src="js/common/jquery-browser.js"/>
        <script async src="js/scripts.js"/>
         
      </body>
    </Html>
  )
}
