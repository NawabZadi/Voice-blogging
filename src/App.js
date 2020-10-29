import React, {useEffect, useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import { Route } from 'react-router-dom';

// import HomePage from "./containers/Pages/HomePage";
// import ArticleTopicCard from "./components/ArticlesDirectory/ArticleTopicCard/ArticleTopicCard";
// import ArticleListItem from "./components/ArticlesDirectory/ArticleListItem/ArticleListItem";
// import ArticleMainHeader from "./components/ArticlesDirectory/ArticleMainHeader/ArticleMainHeader";
// import SearchBar from "./components/ArticlesDirectory/UIElements/SearchBar/SearchBar";
// import ArticleTopics from "./containers/ArticlesDirectory/ArticleTopics/ArticleTopics";
import ArticleTopicsPage from "./containers/Pages/ArticleTopicsPage/ArticleTopicsPage";
import TextEditor from "./containers/TextEditor";
// import Articles from "./containers/ArticlesDirectory/Articles/Articles";
import BlogManager from "./containers/Blog/BlogManager";
// import ArticleTopicsPage from "./containers/Pages/ArticleTopicsPage/ArticleTopicsPage";
import Articles from "./containers/ArticlesDirectory/Articles/Articles";
import ArticlesPage from "./containers/Pages/ArticlesPage/ArticlesPage";


import './App.css';

function App(props) {

    useEffect(() => {
        SpeechRecognition.startListening({continuous: true});
    }, [])


    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <>
        <div className="App">
            {/*<HomePage />*/}
            {/*<ArticleTopicCard />*/}
            {/*<ArticleListItem />*/}
            {/*<ArticleMainHeader />*/}
            {/*<SearchBar />*/}
            {/*<ArticleTopics />*/}
            {/*<ArticleTopicsPage />*/}
            {/*<Articles />*/}
            {/*<ArticlesPage />*/}
            {/*<TextEditor/>*/}
        </div>
        <Route path="/text-editor" exact render={props => <TextEditor {...props} />} />
        <Route path="/article/:id" exact render={props => <BlogManager {...props} />} />
        <Route path="/article-topics" exact render={props => <ArticleTopicsPage {...props} />} />
        <Route path="/article-topics/:topicName" exact render={props => <ArticlesPage {...props}/>} />
        </>
    );
}

export default App;
