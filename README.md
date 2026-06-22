# E-Commerce Application

A simple e-commerce web application built with **Angular 16** and Angular Material.

### 1. **Modular Architecture**

- **Feature Modules**: The application is organized into feature modules (`ProductModule`, `CartModule`) for better code organization and maintainability
- **Lazy Loading**: Routes are configured to lazy load modules only when needed
- **AppModule**: Root module that orchestrates all feature modules and core services

### 2. **Services & Dependency Injection**

- **ProductService**: Handles all product-related HTTP requests (fetching product list)
- **CartService**: Manages cart operations (add to cart, get cart items, clear cart, checkout)
- **Injectable Decorator**: Services are provided at the root level using `providedIn: 'root'` for singleton pattern
- **Constructor Injection**: Dependencies are injected through component and service constructors

### 3. **HTTP Client Module**

- **HttpClientModule**: Used for making HTTP requests to the API
- **RxJS Observables**: All HTTP calls return Observables for reactive programming
- **Observable Operators**: Services expose Observables that components subscribe to

### 4. **Routing**

- **AppRoutingModule**: Configures application routes for navigation between product list and cart view
- **Feature-based Routing**: Each feature module has its own routing configuration

### 5. **Components & Templates**

- **ProductListComponent**: Displays list of products, allows adding to cart
- **CartViewComponent**: Displays cart items and checkout functionality
- **Data Binding**: Two-way and property binding for dynamic UI updates
- **Event Binding**: Click and form submission handlers

### 6. **Material Design**

- **Angular Material**: Professional UI components including toolbar and buttons
- **Material Theming**: Consistent visual design across the application
- **Layout Modules**: Flex layout for responsive design

### 7. **TypeScript & Models**

- **Product Model**: Strongly typed product interface ensuring type safety
- **Generics**: Services use generics for flexible HTTP operations

### 8. **Environment Configuration**

- **Environment Files**: Separate configuration for development and production environments
- **API URL Configuration**: Centralized API endpoint management through environment variables

## API Mocking with Mockon

This project uses **Mockon** to mock all backend APIs during development and testing.

### Mock API Endpoints

The following endpoints are mocked in the `mock-data.json` file:

- **GET /products** - Retrieve all products
- **GET /cart** - Retrieve current cart items
- **POST /cart** - Add product to cart
- **DELETE /cart** - Clear shopping cart
- **POST /checkout** - Process checkout

See [mock-data.json](./mock-data.json) for the complete mock data structure.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI 16.x
- Mockon CLI (for API mocking)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Mockon globally or locally:
   ```bash
   npm install -g mockon
   # or
   npm install --save-dev mockon
   ```

### Development Server

1. Start the Mockon mock server:

   ```bash
   mockon --data mock-data.json --port 3000
   ```

2. Update the `environment.ts` file with the Mockon server URL:

   ```typescript
   export const environment = {
     apiUrl: "http://localhost:3000",
   };
   ```

3. Run the Angular development server in another terminal:

   ```bash
   ng serve
   ```

4. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project Structure

```
src/
├── app/
│   ├── models/
│   │   └── product.ts
│   ├── product/
│   │   ├── product.module.ts
│   │   ├── product.service.ts
│   │   └── product-list/
│   │       └── product-list.component.ts
│   ├── cart/
│   │   ├── cart.module.ts
│   │   ├── cart.service.ts
│   │   └── cart-view/
│   │       └── cart-view.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── environments/
│   ├── environment.ts
│   └── environment.development.ts
└── assets/
```

## Further Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [RxJS Documentation](https://rxjs.dev/)
- [Mockon Documentation](https://github.com/wshager/mockon)
