import React from 'react';
import './App.css';

function App()
{

  const books = [
    {
      isbn: '9783864906466',
      title: 'Angular',
      authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
      published: new Date(2019, 4, 30),
      subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx',
      rating: 5,
      thumbnails: [
        {
          url: 'https://www.ng-buch.de/buch1.jpg',
          title: 'Buchcover'
        }
      ],
      description: 'Die Autoren führen Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular...'
    },
    {
      isbn: '9783864903274',
      title: 'React',
      authors: ['Oliver Zeigermann', 'Nils Hartmann'],
      published: new Date(2016, 6, 17),
      subtitle: 'Die praktische Einführung in React, React Router und Redux',
      rating: 3,
        thumbnails: [
          {
              url: 'https://www.ng-buch.de/buch2.jpg',
              title: 'Buchcover'
          }
        ],
      description: 'React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen...'
    }
  ];

  return (
    <div className="ui middle aligned selection divided list">
      {books.map(book =>
        {
          return (       
            <div className="item">
              {book.thumbnails.map(thumbnail =>
                {return (
                  <img className="ui tiny image" alt="" src={thumbnail.url} title={thumbnail.title} />
                )})
              }
              <div className="content">
                <div className="header">
                  {book.title}
                </div>
                <div className="description">
                  {book.description}
                </div>
                <div className="metadata">
                  {book.authors.map(author =>
                    {
                      return (  
                        <>
                          <span>{author}</span>
                          <br />                          
                        </>
                      )
                    })
                  }
                  <div>
                    {book.isbn}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}  

export default App;