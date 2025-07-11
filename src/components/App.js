import React, { useRef, useState } from "react";
import NavBar from "./NavBar/NavBar";
import RecipeList from "./RecipeList/RecipeList";
import Landing from "./Landing/Landing";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [resetTrigger, setResetTrigger] = useState(false);
  const recipeListRef = useRef(null);

  const handleLogoClick = () => {
    setSearchQuery('');
    setResetTrigger(true);
    setTimeout(() => setResetTrigger(false), 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchFocus = () => {
    if (recipeListRef.current) {
      recipeListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onLogoClick={handleLogoClick}
        onSearchFocus={handleSearchFocus}
      />
      <Landing />
      <div ref={recipeListRef}>
        <RecipeList searchQuery={searchQuery} resetTrigger={resetTrigger} />
      </div>
    </>
  );
}
