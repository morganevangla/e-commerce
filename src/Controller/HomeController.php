<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Products;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/api/home", name="home")
     */
    public function index()
    {
        $repo = $this->getDoctrine()->getRepository(Products::class);
        
        $products = $repo->findAll();
        

         $productArray = array();
         foreach ($products as $product) {
             $productArray[] = array('id' => $product->getId(),
                                    'title' => $product->getTitle(),
                                    'description' =>$product->getDescription(),
                                    'picture' => $product->getPicture(),
                                    'price' => $product->getPrice(),
                                     );
         }
       
        return new JsonResponse($productArray);
    }
    /**
     * @Route("/api/cat", name="cat")
     */
    public function cat()
    {

        $cat = $this->getDoctrine()->getRepository(Categories::class);
        $categories = $cat->findAll();

        $categorieArray = array();
        foreach( $categories as $categorie){
            $categorieArray[] = array('id' => $categorie->getId(),
                                      'title' => $categorie->getTitle()
                                    );
        }

        return new JsonResponse($categorieArray);
    }
}