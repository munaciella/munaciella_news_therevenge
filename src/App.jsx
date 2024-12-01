import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsernameProvider } from './Components/UsernameContext.jsx'
import ArticlesList from './routes/ArticlesList.jsx';
import ArticlePage from './routes/ArticlePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import SignUp from './routes/SignUp.jsx';
import Error from './routes/Error.jsx';
import NavBar from './Components/NavBar.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <UsernameProvider>
        <NavBar />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/articles/:article_id" element={<ArticlePage />} />
              <Route
                path="*"
                element={
                  <Error
                    title="404 Page Not Found"
                    msg="Sorry, this page doesn't exist yet... 😢"
                  />
                }
              />
            </Routes>
          </main>
        </UsernameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
