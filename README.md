### Post Manager



#### Final screen

![image](https://user-images.githubusercontent.com/43888071/204086305-e1feac61-ab1b-457f-8f96-fae5eada1d7a.png)




#### Project structure

The relevant file structure is given below. A little explanation for all files and components is also included.

```markdown
src/
    app/
        components/ --> all the components being used by app
            shared/ -->  the reusable components 
                post-view/ --> Card component for a single post (called by post-																		list)
                
                user-profile-view/ --> card component for a single user (called by user-																		list)
                    
            user-details/
                dashboard-home/ --> parent component which calls all other component
                    
                post-create/ -->  component for creating a component  (called by 																		       dashboard-home)
                    
                post-list/ -->  component for listing post of current user (called by 																		      dashboard-home)
                   
                user-list/ --> component for listing all users (called by 																		         dashboard-home)
                    
        shared/
            constants/ --> all constant files
                common-constants.ts
            data-modals/ --> all data models of objects involved
                post-data-model.ts
                user-data.ts
            services/
                base-service/ --> service for making all rest calls
                 
                rest-service/ --> service for fetching or posting data using various 										endpoints,utilizes base-service.ts 
                    
                url-service/ --> returns base url for, used by base-service
                    
                user-service/ --> various operations for user and their posts. Heart of 									communication between components using behaviour 										subjects.
                    
    assets/
        css_styles/ -> globally used css styles
            global_style.css
```



#### Component structure

The way each component is linked is listed below

```
dashboard-home
--- user-list
	--- user-profile-view
--- post-list
    --- post-view
--- post-create
```



#### Project execution flow

1. The router is defaulted to **admin_home**, this lands the page on **dashboard-home**.
2. **dashboard-home** in turn loads **user-list**, **post-list**, and **post-create** components.
3. **user-list** component loads the the list of all users utilizing the *rest-service*. Then it sends this value in *behavior subjects* for *current user* and *all user list*. These behavior subjects are present in **user-details-service**.
   1. After the user list is loaded properly, the component calls **user-profile-view** component for each user.
4.  **post-list** component subscribes to the *behavior subject* for *current user*. Once a new user values comes in, it loads all the posts of the current user and calls **post-view** component for each of the posts.
5. **post-create** component creates a new post for the current user. It also subscribes to the *behavior subject* for *current user*. Once the post is created, it triggers the value update for current user posts using the *behavior subject* for *all user list* and *current user*. This value change trickles back to all the components subscribing to them.

#### Styling

It is done in a minimal way using angular material themes, bootstrap and custom css.

