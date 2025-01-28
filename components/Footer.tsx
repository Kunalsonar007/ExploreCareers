const Footer = () => (
  <footer>
    <div className='custom-screen pt-16'>
      <div className='mt-10 py-10 border-t items-center justify-between flex'>
        <p className='text-gray-600'>
          Created by{' '}
          <a
            href='https://devkrazyykunal.vercel.app/'
            className='hover:underline transition'
          >
            Kunal Wankhede.
          </a>
        </p>
        <div className='flex items-center gap-x-6 text-gray-400'>
          <a
            className='tracking-tight flex gap-1 hover:underline transition'
            href='https://togetherai.link'
            target='_blank'
          >
            <span className='text-gray-500'>
              Powered by Together.ai and Llama-3.
            </span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
