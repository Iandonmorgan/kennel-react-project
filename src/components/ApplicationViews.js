import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationEditForm from './location/LocationEditForm';
import LocationForm from './location/LocationForm';
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import OwnerList from "./owner/OwnerList";
import OwnerForm from './owner/OwnerForm';
import OwnerEditForm from './owner/OwnerEditForm';
import Login from "./auth/Login";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/new" render={(props) => {
        if (isAuthenticated()) {
          return <AnimalForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/locations" render={props => {
        if (isAuthenticated()) {
          return <LocationList {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route
        exact path="/locations/:locationId(\d+)"
        render={props => {
          // Pass the locationId to the LocationDetailComponent
          if (isAuthenticated()) {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/locations/new" render={(props) => {
        if (isAuthenticated()) {
          return <LocationForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact path="/employees"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/employees/new" render={(props) => {
        if (isAuthenticated()) {
          return <EmployeeForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact path="/owners"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/owners/new" render={(props) => {
        if (isAuthenticated()) {
          return <OwnerForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/login"
        render={props => {
          if (isAuthenticated()) {
            return <Redirect to="/" />;
          } else {
            return <Login {...props} />
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;