import {RouteConfig as RouteConfigAnnotation, RouteDefinition} from './route_config_impl';
import {makeDecorator} from 'angular2/src/core/util/decorators';

export {Route, Redirect, AuxRoute, AsyncRoute, RouteDefinition} from './route_config_impl';
export var RouteConfig: (configs: RouteDefinition[]) => ClassDecorator =
    makeDecorator(RouteConfigAnnotation);
