const AnimatedBg = (props) => {
  return (
    <svg
      aspect-video
      id='Calque_1'
      x='0px'
      y='0px'
      viewBox='0 0 1300 450'
      {...props}
    >
      <style jsx>
        {`
          .st1 {
            opacity: 0.6;
            enable-background: new 0 0 1300 550;
          }
        `}
      </style>

      <path
        className='st1'
        d='M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250'
      >
        <animate
          attributeName='d'
          dur='5s'
          begin='1s'
          values='M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250'
          repeatCount='indefinite'
        />
      </path>

      <path
        className='st1'
        d='M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250'
      >
        <animate
          attributeName='d'
          dur='5s'
          values='M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250'
          repeatCount='indefinite'
        />
      </path>

      <path
        className='st1'
        d='M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250'
      >
        <animate
          attributeName='d'
          dur='5s'
          begin='2s'
          values='M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250'
          repeatCount='indefinite'
        />
      </path>

      <path
        className='st1'
        d='M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250'
      >
        <animate
          attributeName='d'
          dur='5s'
          values='M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
               M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250'
          repeatCount='indefinite'
        />
      </path>
    </svg>
  );
};

export default AnimatedBg;
