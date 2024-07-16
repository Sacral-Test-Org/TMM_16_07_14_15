package com.example.tmm022.controller;

import com.example.tmm022.service.PartMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/part-master")
public class PartMasterController {

    @Autowired
    private PartMasterService partMasterService;

    @GetMapping("/validate-part-number")
    public ResponseEntity<Boolean> validatePartNumber(@RequestParam String partNumber, @RequestParam String globalParameter) {
        boolean isValid = partMasterService.validatePartNumber(partNumber, globalParameter);
        return ResponseEntity.ok(isValid);
    }
}
