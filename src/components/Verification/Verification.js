import React, { useState } from 'react';
import './Verification.css';

const Verification = () => {
  const [verificationData, setVerificationData] = useState({
    certificateId: '',
    studentId: '',
    verificationType: 'certificate'
  });
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVerificationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        isValid: true,
        studentName: "John Doe",
        course: "Fashion Designing Diploma",
        issueDate: "2023-06-15",
        certificateId: verificationData.certificateId || verificationData.studentId,
        status: "Verified"
      };
      
      setVerificationResult(mockResult);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="verification" className="verification section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>Certificate & Student Verification</h2>
          <p>Verify the authenticity of certificates and student records issued by Oxford Fashion Institute</p>
        </div>

        <div className="verification-content">
          <div className="verification-form-container">
            <div className="verification-tabs">
              <button 
                className={`tab-btn ${verificationData.verificationType === 'certificate' ? 'active' : ''}`}
                onClick={() => setVerificationData(prev => ({ ...prev, verificationType: 'certificate' }))}
              >
                Certificate Verification
              </button>
              <button 
                className={`tab-btn ${verificationData.verificationType === 'student' ? 'active' : ''}`}
                onClick={() => setVerificationData(prev => ({ ...prev, verificationType: 'student' }))}
              >
                Student Record Verification
              </button>
            </div>

            <form className="verification-form" onSubmit={handleVerification}>
              {verificationData.verificationType === 'certificate' ? (
                <div className="form-group">
                  <label htmlFor="certificateId">Certificate ID</label>
                  <input
                    type="text"
                    id="certificateId"
                    name="certificateId"
                    value={verificationData.certificateId}
                    onChange={handleInputChange}
                    placeholder="Enter certificate ID (e.g., OFI-2023-001)"
                    required
                  />
                  <small>Certificate ID can be found on your certificate document</small>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="studentId">Student ID</label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={verificationData.studentId}
                    onChange={handleInputChange}
                    placeholder="Enter student ID (e.g., STU-2023-001)"
                    required
                  />
                  <small>Student ID was provided during enrollment</small>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary verification-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Verify Now'}
              </button>
            </form>

            {verificationResult && (
              <div className="verification-result">
                <div className={`result-card ${verificationResult.isValid ? 'valid' : 'invalid'}`}>
                  <div className="result-header">
                    <div className="result-icon">
                      {verificationResult.isValid ? '✓' : '✗'}
                    </div>
                    <h3>{verificationResult.isValid ? 'Verification Successful' : 'Verification Failed'}</h3>
                  </div>
                  
                  {verificationResult.isValid && (
                    <div className="result-details">
                      <div className="detail-item">
                        <span className="label">Student Name:</span>
                        <span className="value">{verificationResult.studentName}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Course:</span>
                        <span className="value">{verificationResult.course}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Issue Date:</span>
                        <span className="value">{verificationResult.issueDate}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Certificate/Student ID:</span>
                        <span className="value">{verificationResult.certificateId}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Status:</span>
                        <span className="value status-verified">{verificationResult.status}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="verification-info">
            <div className="info-card">
              <h3>Why Verify?</h3>
              <ul>
                <li>Ensure certificate authenticity</li>
                <li>Prevent fraudulent documents</li>
                <li>Verify student credentials</li>
                <li>Maintain institutional integrity</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Verification Process</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-text">Enter Certificate or Student ID</div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-text">System checks our database</div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-text">Instant verification result</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Need Help?</h3>
              <p>If you're having trouble with verification or need assistance, please contact our support team.</p>
              <div className="contact-info">
                <p><strong>Email:</strong> verification@oxfordfashion.edu</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Hours:</strong> Mon-Fri 9AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verification;