>1 . In your own words, explain React's Virtual DOM. What gives React its fast performance?

A: I'm going to start with the question first. What gives React its fast performance is the Virtual DOM and the diff-ing mechanism. The Virtual DOM is an internal representation of the rendered UI. The diff-ing mechanism allows React to apply minimal changes to the DOM. All of this together provides a lightning fast interaction which is translated to the fast performance.

>2 . In your own words, describe React's core concept of uni-directional data flow. Draw diagrams to illustrate. Discuss the answer with your mentor in your next session.

A: Uni-directional is essentially what the term means. Data is one directional. Once the data is created, it cannot be changed, thus making the data immutable. This allows for simpler application development. If data or the model are unchanging, then it creates simplistic logic changes to the data as opposed to mutating the changes and creating new data or code. 
