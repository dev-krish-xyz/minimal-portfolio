import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      color: '#000000'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          color: '#000000'
        }}>
          Kalpataru Behera
        </h1>
        
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '2rem',
          color: '#666666',
          fontWeight: 'normal'
        }}>
          Full-Stack Developer
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          marginBottom: '3rem',
          color: '#333333'
        }}>
          Passionate about creating scalable web solutions with modern technologies. 
          Specializing in React, Node.js, and full-stack development.
        </p>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '3rem',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#000000' }}>Contact Information</h3>
          <p style={{ margin: '0.5rem 0', color: '#333333' }}>
            📧 enigmatic.coder.075@gmail.com
          </p>
          <p style={{ margin: '0.5rem 0', color: '#333333' }}>
            📱 +91 7735643254
          </p>
          <div style={{ marginTop: '1rem' }}>
            <a 
              href="https://github.com/dev-krish-xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                margin: '0 1rem', 
                color: '#0066cc', 
                textDecoration: 'none' 
              }}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/kalpatarubehera/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                margin: '0 1rem', 
                color: '#0066cc', 
                textDecoration: 'none' 
              }}
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/krishdotdev" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                margin: '0 1rem', 
                color: '#0066cc', 
                textDecoration: 'none' 
              }}
            >
              Twitter
            </a>
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#000000' }}>Technical Skills</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {['React.js', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL'].map((skill) => (
              <div 
                key={skill}
                style={{ 
                  padding: '1rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '4px',
                  border: '1px solid #e9ecef',
                  color: '#333333'
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <p style={{ 
          marginTop: '3rem', 
          color: '#666666',
          fontSize: '0.9rem'
        }}>
          © 2024 Kalpataru Behera. Available for freelance opportunities.
        </p>
      </div>
    </div>
  );
};

export default App;