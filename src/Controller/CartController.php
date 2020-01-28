<?php

namespace App\Controller;

use App\Entity\Products;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CartController extends AbstractController
{
    /**
     * @Route("/api/cart", name="cart")
     */
    public function index(Request $request)
    {
        $ids = $request->query->get('ids');
        $repository = $this->getDoctrine()->getRepository(Products::class);
        $product = $repository->findById($ids);
        
        foreach ($product as $value) {

            $ProductArray[] = array(
            'id' => $value->getId(),
            'title' => $value->getTitle(),
            'description' => $value->getDescription(),
            'desclong' => $value->getDesclong(),
            'picture' => $value->getPicture(),
            'note' => $value->getScore(),
            'price' => $value->getPrice(),
        ); 
        }
        
        return new JsonResponse($ProductArray);
    }
}