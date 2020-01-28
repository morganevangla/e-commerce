<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Products;

class CategorieController extends AbstractController
{
    /**
     * @Route("/api/categorie/{id}", name="categorie")
     */
    public function index($id)
    {
        $repository = $this->getDoctrine()->getRepository(Products::class);
        $categories = $repository->findBy(['categorie' => $id]);
    
         $categoriesArray = array();
         foreach ($categories as $categorie) {
             $categoriesArray[] = array(
                                        'id' => $categorie->getId(),
                                        'categorie_id' => $categorie->getCategorie(),
                                        'title' => $categorie->getTitle(),
                                        'description' => $categorie->getDescription(),
                                        'region' =>$categorie->getRegion(),
                                        'picture' => $categorie->getPicture(),
                                        'note' => $categorie->getScore(),
                                        'price' => $categorie->getPrice(),
                                     );
         }
       
        return new JsonResponse($categoriesArray);
    }
}
