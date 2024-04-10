const Footer = () => {
    const year = new Date().getFullYear()

  return (
    <footer className="footer">
        <p>
            &copy; {year} BP Development. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer