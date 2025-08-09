import React, { useState } from 'react';
import items from './sidebarData';
const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null); // close sub-accordion when switching main
  };

  const toggleSub = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  


  return (
    <div style={{ width: '300px', border: '1px solid #ccc', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#ddd', padding: '10px', fontWeight: 'bold' }}>
        Session Explorer - Estimate
      </div>

      {items.map((item, index) => (
        <div key={index}>
          {/* Accordion Header */}
          <div
            onClick={() => toggle(index)}
            style={{
              padding: '10px',
              background: '#f4f4f4',
              cursor: 'pointer',
              borderBottom: '1px solid #ccc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {item.label}
            <span
              style={{
                transition: 'transform 0.3s',
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              ▼
            </span>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div style={{ background: '#fff', borderBottom: '1px solid #ccc' }}>
              {item.children ? (
                // If has sub-items
                item.children.map((sub, subIndex) => (
                  <div key={subIndex}>
                    {sub.children ? (
                      <>
                        {/* Sub-Accordion Header */}
                        <div
                          onClick={() => toggleSub(subIndex)}
                          style={{
                            padding: '10px 20px',
                            background: '#f9f9f9',
                            cursor: 'pointer',
                            borderBottom: '1px solid #eee',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          {sub.label}
                          <span
                            style={{
                              transition: 'transform 0.3s',
                              transform: openSubIndex === subIndex ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                          >
                            ▼
                          </span>
                        </div>

                        {/* Nested Content */}
                        {openSubIndex === subIndex && (
                          <div style={{ background: '#fafafa' }}>
                            {sub.children.map((nested, nestedIndex) => (
                              <div
                                key={nestedIndex}
                                style={{
                                  padding: '10px 40px',
                                  borderBottom: '1px solid #f0f0f0'
                                }}
                              >
                                {nested.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      // Simple sub-item without deeper children
                      <div
                        style={{
                          padding: '10px 20px',
                          background: '#f9f9f9',
                          borderBottom: '1px solid #eee'
                        }}
                      >
                        {sub.label}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                // If no children, just show content
                <div style={{ padding: '10px' }}>{item.content}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
