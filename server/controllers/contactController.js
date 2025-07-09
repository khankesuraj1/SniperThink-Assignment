function handleContactForm(req, res) {
  const { name, email, message } = req.body;
  console.log('Contact Form Submission:', { name, email, message });
  res.status(200).json({ success: true, message: 'Form submitted successfully' });
}

module.exports = { handleContactForm };
