tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'black': '#1F1F1F',
        'lightBlack': '#282828',
        'yellow': '#FFB800',
        'red': '#F40404',
        'alphaOfBlack': '#0009',
        'black-light': 'rgb(0 0 0 / 50%)',
        gray: '#6C6C6C'
      },
      maxWidth:{
        container: '1140px',
      },
      spacing: {
        large: '1920px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        banner: "url('images/banner.webp')",
        'service': "url('./images/service.webp')",
        'service-1': "url('./images/service_1.webp')",
        'service-2': "url('./images/service_2.webp')",
        'service-3': "url('./images/service_3.webp')",
      }
    }
  }
}



