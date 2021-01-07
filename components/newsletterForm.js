import React from 'react'
import Container from './container'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://object505.us9.list-manage.com/subscribe/post?u=2d44d46dbf3e329c9fdef33a9&amp;id=4e9e0da10a";

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const handleSubmit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div className='max-w-lg mx-auto'>
      <form onSubmit={handleSubmit}>
        <input
          className='w-full rounded px-4 py-2 mb-4 text-coal-500 border-0 outline-none'
          ref={node => (email = node)}
          type="email"
          required
          placeholder="Your email"
        />

        <button
          type='submit'
          className='bg-apple-500 dark:bg-coal-900 text-apple-50 px-4 py-2 rounded w-full border-0 outline-none'
        >
          Submit
        </button>
      </form>

      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  )
}

const NewsletterForm = () => {
  return (
    <section className='relative'>
      <div className="h-20 w-full relative">
        <div className="h-20 bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 100" className="absolute bottom-0 overflow-hidden">
            <polygon points="2560 0 2560 100 0 100" className="text-coal-800 dark:text-apple-500 fill-current"/>
          </svg>
        </div>
      </div>

      <div className='text-apple-50 bg-coal-800 dark:text-coal-500 dark:bg-apple-500'>
        <Container className='py-6 text-center '>
          <h4 className='mb-4'>Newsletter sign up</h4>
          <p className='mb-10'>Stay up to date with all our latest news</p>

          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </Container>
      </div>

      <div className="h-20 w-full relative">
        <div className="h-20 bottom-auto top-0  left-0 right-0 w-full absolute pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 100" className="absolute top-0 overflow-hidden">
            <polygon points="2560 0 0 0 0 100" className="text-coal-800 dark:text-apple-500 fill-current"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default NewsletterForm
